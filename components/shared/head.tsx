import Head from "next/head";

/**
 * This is a React component that renders the header section of a website with specific metadata and a
 * favicon.
 * @returns A React component that renders a `Head` element with a title, description, viewport meta
 * tag, and a link to a favicon.
 */
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
