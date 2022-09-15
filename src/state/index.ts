import { assign, createMachine } from "xstate";
import { baseDeck, shuffleDeck } from "../card";
import type { Card } from "../card";

export interface GameContext {
  roundsLeft: number;
  deck: Card[];
  table: Card[];
  players: {
    name: string;
    hand: Card[];
  }[];
}

export type GameEvents =
  | { type: "start" }
  | { type: "sweep cards" }
  | { type: "drop card" }
  | { type: "toggle hand card" }
  | { type: "toggle table card" }
  | { type: "next round" };

export const gameMachine = createMachine(
  {
    id: "Sweep 15",
    // tsTypes: {} as import("./index.typegen").Typegen0,
    predictableActionArguments: true,
    schema: {
      context: {} as GameContext,
      events: {} as GameEvents,
    },
    context: {
      roundsLeft: 3,
      deck: baseDeck,
      table: [],
      players: [
        { name: "Player 1", hand: [] },
        { name: "Player 2", hand: [] },
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
