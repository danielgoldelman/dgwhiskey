import Head from "next/head";

export default function Header() {
  return (
    <Head>
      <title>DG Whiskey</title>
      <meta name="description" content="Expert reviews of decisive whiskeys" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/svgs/whiskeyGlass.svg" />
    </Head>
  );
}
