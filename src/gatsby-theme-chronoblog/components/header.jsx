/** @jsx jsx */
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Link as LinkGatsby } from 'gatsby';
import Headroom from 'react-headroom';
import { Container, Header, jsx } from 'theme-ui';
import SiteHeader from 'gatsby-theme-chronoblog/site-header.mdx';
/* eslint-disable no-unused-vars */
import styles from './header.css';

// https://theme-ui.com/sx-prop#using-the-sx-prop-in-mdx
const Link = ({ to, sx, ...props }) => (
  <LinkGatsby
    sx={{
      ...sx,
      marginRight: ['12px', '16px'],
      color: 'currentcolor',
      textDecoration: 'none',
      ':hover': {
        opacity: 0.7
      }
    }}
    to={to}
    {...props}
  />
);

const Anchor = ({ children, ...props }) => (
  <a
    sx={{
      marginRight: ['8px', '12px'],
      color: 'text',
      textDecoration: 'none',
      ':hover': {
        opacity: 0.7
      }
    }}
    {...props}
  >
    {children}
  </a>
);

const MenuMain = ({ children, ...props }) => (
  <Container
    sx={{
      pt: ['8px', '16px'],
      pb: 0
    }}
  >
    <div
      {...props}
      sx={{
        width: '100%',
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: ['flex-start'],
        alignItems: 'center',
        fontSize: [1],
        pb: ['8px', '16px'],
        px: [2, 3]
      }}
    >
      {children}
    </div>
  </Container>
);

const MenuBlock = ({ children, sx, ...props }) => (
  <div
    {...props}
    sx={{
      ...sx,
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'center',
      fontSize: [1, 2]
    }}
  >
    {children}
  </div>
);

const ChronoblogHeader = ({ location, ...props }) => {
  const [
    headroomSecondaryPageClassName,
    setHeadroomSecondaryPageClassName
  ] = React.useState(null);

  React.useEffect(() => {
    const { pathname } =
      typeof window !== 'undefined' && window.location;
    const isSecondaryPage = pathname !== '/';

    if (isSecondaryPage) {
      setHeadroomSecondaryPageClassName(
        'headroom--secondary-page-wrapper'
      );
    }
  }, []);

  return (
    <Headroom
      {...props}
      disableInlineStyles
      className={headroomSecondaryPageClassName}
    >
      <Header>
        <MDXProvider
          components={{ MenuMain, MenuBlock, Link, Anchor }}
        >
          <div
            sx={{
              width: '100%'
            }}
          >
            <SiteHeader />
          </div>
        </MDXProvider>
      </Header>
    </Headroom>
  );
};

export default ChronoblogHeader;
