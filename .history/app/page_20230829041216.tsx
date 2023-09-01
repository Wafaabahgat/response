import Head from "next/head";
import Image from "next/image";
import {Hero}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Photography Next App</title>
        <meta name="description" content="Generated by Next App"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Hero/>
    </div>
  );
}
