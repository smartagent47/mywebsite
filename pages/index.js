import Head from 'next/head';

import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css2?family=Gelasio:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Hero />
    </div>
  );
}