import React from 'react';

import Container from 'gatsby-theme-chronoblog/src/components/container';
import Footer from 'gatsby-theme-chronoblog/src/components/footer';
import Root from 'gatsby-theme-chronoblog/src/components/root';
import Header from './header';

// eslint-disable-next-line react/display-name
export default ({ children }) => {
  return (
    <Root sx={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Container sx={{ flex: '1 1 auto' }}>{children}</Container>
      <Footer />
    </Root>
  );
};
