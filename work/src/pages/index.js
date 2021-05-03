import React from 'react';
import AppLayout from 'components/AppLayout';
import Head from 'next/head';
const Home = () => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <title>Home</title>
      </Head>
      <AppLayout>
        <div> test </div>
      </AppLayout>
    </>
  );
};

export default Home;
