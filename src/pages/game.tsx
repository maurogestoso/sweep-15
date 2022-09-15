import React, { createContext, useContext } from "react";
import type { NextPage } from "next";
import { InterpreterFrom } from "xstate";
import { useActor, useInterpret } from "@xstate/react";

import { gameMachine } from "../state";
import { PlayerHand } from "../components/PlayerHand";
import { Table } from "../components/Table";

export const GlobalStateContext = createContext({
  gameService: {} as InterpreterFrom<typeof gameMachine>,
});

export const GlobalStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const gameService = useInterpret(gameMachine);

  return (
    <GlobalStateContext.Provider value={{ gameService }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

const GameWithContext: NextPage = () => {
  return (
    <GlobalStateProvider>
      <Game />
    </GlobalStateProvider>
  );
};

const Game = () => {
  const { gameService } = useContext(GlobalStateContext);
  const [current, send] = useActor(gameService);

  const { context: ctx } = current;

  console.log(ctx.players["Player 1"]?.selected.hand);

  return (
    <>
      <main className="container mx-auto h-screen flex flex-col gap-y-4">
        <h1 className="font-bold text-3xl">Sweep 15</h1>
        <section className="">
          <p>{`Current state: ${current.value}`}</p>
        </section>
        <section className="border border-black box-content p-8 grow">
          {current.matches("ready to start") && (
            <button onClick={() => send("start")}>Shuffle and deal</button>
          )}
          {current.matches("player turn") && (
            <div>
              <Table deck={ctx.deck} table={ctx.table} />

              <div className="flex justify-between">
                <PlayerHand playerName="Player 1" />
                <PlayerHand playerName="Player 2" />
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default GameWithContext;
