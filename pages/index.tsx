import Head from "next/head";

import Header from "@/components/header";
import AllDrinks from "../components/mainPage/allDrinks";

export default function Home() {
  return (
    <>
      <Head>
        <title>Whiskey</title>
        <meta
          name="description"
          content="Expert reviews of decisive whiskeys"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-white flex flex-col h-screen">
        <Header />
        <main className="h-full bg-gradient-to-b from-black to-orange-400 bg-auto justify-center flex overflow-y-auto relative">
          <AllDrinks />
        </main>
      </div>
    </>
  );
}
