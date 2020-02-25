/** @jsx jsx */
import { MDXProvider } from '@mdx-js/react';
import { Link as LinkGatsby } from 'gatsby';
import Headroom from 'react-headroom';
import { Container, Header, jsx } from 'theme-ui';
import SiteHeader from 'gatsby-theme-chronoblog/site-header.mdx';
import styles from './header.css';

// https://theme-ui.com/sx-prop#using-the-sx-prop-in-mdx
const Link = ({ to, ...props }) => (
  <LinkGatsby
    sx={{
      marginRight: ['8px', '16px'],
      color: 'text',
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
        flexWrap: 'wrap',
        justifyContent: ['space-between'],
        alignItems: 'center',
        fontSize: [1],
        pb: ['8px', '16px'],
        borderBottom: '3px solid var(--color-gray)',
        px: 3
      }}
    >
      {children}
    </div>
  </Container>
);

const MenuBlock = ({ children, ...props }) => (
  <div
    {...props}
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center'
    }}
  >
    {children}
  </div>
);

const ChronoblogHeader = ({ location, ...props }) => {
  const { pathname } =
    typeof window !== 'undefined' && window.location;
  const isMainPage = pathname === '/';
  const headroomMainpageClassName = isMainPage
    ? 'headroom--mainpage-wrapper'
    : null;

  return (
    <Headroom
      {...props}
      disableInlineStyles
      className={headroomMainpageClassName}
    >
      <Header>
        <MDXProvider
          components={{ MenuMain, MenuBlock, Link, Anchor }}
        >
          <div
            sx={{
              width: '100%',
              marginX: 'auto',
              marginBottom: ['2px', '2px'],
              marginTop: ['0px', '0px'],
              backgroundColor: 'background'
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
