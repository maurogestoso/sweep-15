import type { NextPage } from "next";
import Head from "next/head";
import { PreloadImages } from "../components/PreloadImages";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sweep 15</title>
        <meta name="description" content="A traditional card game" />
        <link rel="icon" href="/favicon.ico" />
        <PreloadImages />
      </Head>

      <main className="container mx-auto h-screen">
        <h1 className="font-bold text-3xl">Sweep 15</h1>
        <Link href="/game">
          <a>Start Game</a>
        </Link>
      </main>
    </>
  );
};

export default Home;
