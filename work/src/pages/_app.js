import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

import wrapper from 'store/configurestore';

const RootContainer = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <title>Clone node bird</title>
      </Head>
      <Component />
    </>
  );
};

RootContainer.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default RootContainer;
