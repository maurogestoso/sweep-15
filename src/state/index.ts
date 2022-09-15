import { assign, createMachine } from "xstate";
import { baseDeck, shuffleDeck } from "../card";
import type { Card, CardId } from "../card";

export interface GameContext {
  roundsLeft: number;
  deck: Card[];
  table: Card[];
  players: {
    name: string;
    hand: Card[];
    selected: {
      hand: CardId | null;
      table: Set<CardId>;
    };
  }[];
}

export type GameEvents =
  | { type: "start" }
  | { type: "sweep cards" }
  | { type: "drop card" }
  | { type: "toggle hand card" }
  | { type: "toggle table card" }
  | { type: "next round" };

export const gameMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QGUDuYwAcAEBGArAHQBOYAhhAJ7YAuA9trDWcTQMRMs2KiZ2wBLGgLoA7HiAAeiALQAmAMwBOQgAZcSgCwA2bQA5lC-Du0AaEJUSK9hXLkWalqhdvxatAXw-m0GHAUJMABsySjBiWgBXYlEOdCxsAGMWCHgkED5BYTEJaQRNfBttVQB2JTkSzTt8BQU9c0sEBVwFQgLcPU0SuqV8OT0lLx94-yJg0PComLYIYjocZOIICUyhEXF0vM05OTUFdRLcXVVtJWV8BsRywmLOpQH1VU65bSGQXwSA8bCImmjY+hQKBBMDYAAWZFEECSKRW-DWOU2V1whHwNQUJV0+AI3R2lwQ2kI+3Rjm0GiUxUcbw+o0CIR+UwBdCBINoZAARqzFst0qtshtQHklCjumUSodtJjhRV8bgnoQ9Iquvs5EdcCU3NSRngxvTJn9pnCsutcogCLtapplKoauLeuL8fhMYQKk7HE8nHIlCUtX4dSQ6JEodg6AA3cJsURgSQ0bBzIM83jw-mmhAybSaNQFQ5y7QYgh5-G3Qga5rlSqlPTOX2fIjx4NhiNGhECqSIIwlEsdeyFbGaAwlfHdVovPMasquDWvN6iOgQOASGn+0gUaj0RjMVjNlNItM7Qmq1QvE59AwKfuy-o3G2nDMDDMYuQ12nffX-bcm3dehXivSuCl6Kq56dPichorY5rYkYf5Yj63jvNqAT1tCjbEB+iKCma1xyDamj9gochWk4VpDhULr-mSLz4Lo9zPv6UBkAAtqCqHoa2eTaDsRLqOqkp9gRFwWIgdoutBnFOt0uh6HRBBsam8h5moGgmAYZzGLo+LpkQWJOko5TKB0+heF4QA */
  createMachine(
    {
      id: "Sweep 15",

    // tsTypes: {} as import("./index.typegen").Typegen0,
      predictableActionArguments: true,

      context: {
        roundsLeft: 3,
        deck: baseDeck,
        table: [],
        players: [
          {
            name: "Player 2",
            hand: [],
            selected: { hand: null, table: new Set<CardId>() },
          },
          {
            name: "Player 1",
            hand: [],
            selected: { hand: null, table: new Set<CardId>() },
          },
        ],
      },

      initial: "ready to start",
      states: {
        "ready to start": {
          on: {
            start: {
              actions: ["setUpRoundStart", "shuffleAndDeal", "setPlayerOrder"],
              target: "player turn",
            },
          },
        },
        "player turn": {
          entry: "determineActivePlayer",
          always: {
            cond: "isRoundOver",
            target: "round over",
          },
          on: {
            "sweep cards": {
              actions: "sweepCards",
              cond: "setAdds15",
            },
            "drop card": {
              actions: "dropCard",
              cond: "isHandCardSelected",
            },
            "toggle hand card": {
              actions: "toggleHandCard",
            },
            "toggle table card": {
              actions: "toggleTableCard",
            },
          },
        },
        "round over": {
          always: {
            cond: "isGameOver",
            target: "game over",
          },
          on: {
            "next round": {
              actions: "setUpRoundStart",
              target: "player turn",
            },
          },
        },
        "game over": {},
      },
    },
    {
      guards: {
        isRoundOver: () => false,
      },
      actions: {
        setUpRoundStart: assign((ctx) => {
          const newPlayers = ctx.players;
          const newTable = ctx.table;
          const deck = shuffleDeck(ctx.deck);

          for (let i = 0; i < 3; i += 1) {
            let topCard = deck.shift();
            if (!topCard) break;
            ctx.players[0]?.hand.push(topCard);

            topCard = deck.shift();
            if (!topCard) break;
            ctx.players[1]?.hand.push(topCard);
          }

          for (let i = 0; i < 4; i += 1) {
            const topCard = deck.shift();
            if (!topCard) break;
            newTable.push(topCard);
          }

          return {
            deck,
            players: newPlayers,
            table: newTable,
          };
        }),
      },
    }
  );
