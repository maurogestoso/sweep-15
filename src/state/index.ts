import { assign, createMachine } from "xstate";
import { baseDeck, Card, shuffleDeck } from "../card";

interface GameContext {
  roundsLeft: number;
  deck: Card[];
  table: Card[];
  players: {
    name: string;
    hand: Card[];
  }[];
}

export const gameMachine = createMachine(
  {
    id: "Sweep 15",
    initial: "Ready to start",
    tsTypes: {} as import("./index.typegen").Typegen0,
    predictableActionArguments: true,
    schema: {
      context: {} as GameContext,
      events: {} as
        | { type: "start" }
        | { type: "sweep cards" }
        | { type: "drop card" }
        | { type: "next round" },
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
    states: {
      "Ready to start": {
        on: {
          start: {
            actions: "setUpRoundStart",
            target: "player turn",
          },
        },
      },
      "player turn": {
        entry: "determineActivePlayer",
        always: {
          cond: "isRoundOver",
          target: "Round over",
        },
        on: {
          "sweep cards": {},
          "drop card": {},
        },
      },
      "Round over": {
        always: {
          cond: "isGameOver",
          target: "Game over",
        },
        on: {
          "next round": {
            actions: "setUpRoundStart",
            target: "player turn",
          },
        },
      },
      "Game over": {},
    },
  },
  {
    guards: {
      isRoundOver: (ctx, evt) => false,
    },
    actions: {
      setUpRoundStart: assign((ctx, evt) => {
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
