import Head from 'next/head';
import HomeContainer from '../containers/Home';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Marvel Stories</title>
        <meta
          name='description'
          content='Marvel stories is a comic app integrated with Marvel Comics API'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeContainer />
    </div>
  );
}
