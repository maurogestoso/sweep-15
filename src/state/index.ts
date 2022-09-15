import { assign, createMachine } from "xstate";
import invariant from "tiny-invariant";

import { baseDeck, shuffleDeck } from "../card";
import type { Card, CardId } from "../card";

export interface Player {
  name: string;
  hand: Card[];
  selected: {
    hand: CardId | null;
    table: Set<CardId>;
  };
}

export interface GameContext {
  roundsLeft: number;
  deck: Card[];
  table: Card[];
  turnOrder: string[];
  activePlayer: string;
  players: Record<string, Player>;
}

export type GameEvents =
  | { type: "start" }
  | { type: "sweep cards" }
  | { type: "drop card" }
  | { type: "toggle hand card"; cardId: CardId }
  | { type: "toggle table card"; cardId: CardId }
  | { type: "next round" };

export const gameMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QGUDuYwAcAEBGArAHQBOYAhhAJ7YAuA9trDWcTQMRMs2KiZ2wBLGgLoA7HiAAeiALQAmAMwBOQgAZcSgCwA2bQA5lC-Du0AaEJUSK9hXLkWalqhdvxatAXw-m0GHAUJMABsySjBiWgBXYlEOdCxsAGMWCHgkED5BYTEJaQRNfBttVQB2JTkSzTt8BQU9c0sEBVwFQgLcPU0SuqV8OT0lLx94-yJg0PComLYIYjocZOIICUyhEXF0vM05OTUFdRLcXVVtJWV8BsRywmLOpQH1VU65bSGQXwSA8bCImmjY+hQKBBMDYAAWZFEECSKRW-DWOU2V1whHwNQUJV0+AI3R2lwQ2kI+3Rjm0GiUxUcbw+o0CIR+UwBdCBINoZAARqzFst0qtshtQHklCjumUSodtJjhRV8bgnoQ9Iquvs5EdcCU3NSRngxvTJn9pnCsutcogCLtapplKoauLeuL8fhMYQKk7HE8nHIlCUtX4dSQ6JEodg6AA3cJsURgSQ0bBzIM83jw-mmhAybSaNQFQ5y7QYgh5-G3Qga5rlSqlPTOX2fIjx4NhiNGhECqSIIwlEsdeyFbGaAwlfHdVovPMasquDWvN6iOgQOASGn+0gUaj0RjMVjNlNItM7Qmq1QvE59AwKfuy-o3G2nDMDDMYuQ12nffX-bcm3dehXivSuCl6Kq56dPichorY5rYkYf5Yj63jvNqAT1tCjbEB+iKCma1xyDamj9gochWk4VpDhULr-mSLz4Lo9zPv6UBkAAtqCqHoa2eTaDsRLqOqkp9gRFwWIgdoutBnFOt0uh6HRBBsam8h5moGgmAYZzGLo+LpkQWJOko5TKB0+heF4QA */
  createMachine(
    {
      id: "Sweep 15",

    // tsTypes: {} as import("./index.typegen").Typegen0,
      schema: {
        context: {} as GameContext,
        events: {} as GameEvents,
      },
      predictableActionArguments: true,

      context: {
        roundsLeft: 3,
        deck: baseDeck,
        table: [],
        turnOrder: ["Player 1", "Player 2"],
        activePlayer: "Player 1",
        players: {
          "Player 1": {
            name: "Player 1",
            hand: [],
            selected: { hand: null, table: new Set<CardId>() },
          },
          "Player 2": {
            name: "Player 2",
            hand: [],
            selected: { hand: null, table: new Set<CardId>() },
          },
        },
      },

      initial: "ready to start",
      states: {
        "ready to start": {
          on: {
            start: {
              actions: ["setUpRoundStart"],
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
        toggleTableCard: assign((ctx, evt) => {
          const currentPlayer = ctx.players[ctx.activePlayer];

          invariant(currentPlayer);

          const table = currentPlayer.selected.table;
          if (table.has(evt.cardId)) {
            table.delete(evt.cardId);
          } else {
            table.add(evt.cardId);
          }

          return {
            ...ctx.players,
            [ctx.activePlayer]: {
              ...currentPlayer,
              selected: {
                ...currentPlayer.selected,
                table,
              },
            },
          };
        }),
        toggleHandCard: assign((ctx, evt) => {
          const currentPlayer = ctx.players[ctx.activePlayer];

          invariant(currentPlayer);

          return {
            players: {
              ...ctx.players,
              [ctx.activePlayer]: {
                ...currentPlayer,
                selected: {
                  ...currentPlayer.selected,
                  hand:
                    evt.cardId === currentPlayer.selected.hand
                      ? null
                      : evt.cardId,
                },
              },
            },
          };
        }),
        setUpRoundStart: assign((ctx) => {
          const newPlayers = ctx.players;
          const newTable = ctx.table;
          const deck = shuffleDeck(ctx.deck);

          for (let i = 0; i < 3; i += 1) {
            let topCard = deck.shift();
            if (!topCard) break;
            ctx.players["Player 1"]?.hand.push(topCard);

            topCard = deck.shift();
            if (!topCard) break;
            ctx.players["Player 2"]?.hand.push(topCard);
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
            turnOrder: ["Player 1", "Player 2"], // TODO: shuffle
          };
        }),
      },
    }
  );
