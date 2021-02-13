/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import Layout from 'gatsby-theme-chronoblog/src/components/layout';

// eslint-disable-next-line react/display-name
export default () => {
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.location) {
      window.location.href = 'https://t.me/sometach';
    }
  });

  return (
    <Layout>
      <h1 sx={{ fontSize: '72px', textAlign: 'center', my: '2em' }}>
        ¯_(ツ)_/¯
      </h1>
    </Layout>
  );
};
