import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Flavor Stories</title>
        <meta
          name='description'
          content='Flavor stories official website. Every flavor has a story behind it. Taste various flavor based on flavor stories recipe'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
}
