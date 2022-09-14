import type { NextPage } from "next";
import Head from "next/head";
import { useMachine } from "@xstate/react";
import { gameMachine } from "../state";
import { Card } from "../card";
import Image from "next/image";

const Home: NextPage = () => {
  const [current, send] = useMachine(gameMachine, { actions: {} });
  const { context: ctx } = current;
  return (
    <>
      <Head>
        <title>Sweep 15</title>
        <meta name="description" content="A traditional card game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto h-screen">
        <h1 className="font-bold text-3xl">Sweep 15</h1>
        <section className="border border-black">
          <p>{`Current state: ${current.value}`}</p>
        </section>
        <section className="border border-black h-[500px]">
          {current.matches("Ready to start") && (
            <button onClick={() => send("start")}>Start Game</button>
          )}
          {current.matches("player turn") && (
            <div>
              <div>
                <h3 className="font-bold text-2xl">Table</h3>
                <p>{`Deck: ${ctx.deck.length}`}</p>
                {ctx.table.map((card, i) => (
                  <Card key={i} {...card} />
                ))}
              </div>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold text-2xl">Player 1</h3>
                  {ctx.players[0]?.hand.map((card, i) => (
                    <Card key={i} {...card} />
                  ))}
                </div>
                <div>
                  <h3 className="font-bold text-2xl">Player 2</h3>
                  {ctx.players[1]?.hand.map((card, i) => (
                    <Card key={i} {...card} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Home;

function Card({ imgUrl, value, suit }: Card) {
  return (
    <Image
      src={imgUrl}
      alt={`${value} of ${suit} card`}
      width={140}
      height={190}
    />
  );
}
