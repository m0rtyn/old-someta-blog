/** @jsx jsx */

import { jsx } from 'theme-ui';
import { Box, Link as LinkUI } from '@theme-ui/components';
import AuthorBanner from 'gatsby-theme-chronoblog/components/author-banner.jsx';

const PromoBanner = () => {
  return (
    <AuthorBanner
      sx={{
        mb: '8px',
        bg: 'transparent',
        boxShadow: 'initial',
        border: '13px solid var(--color-dark)'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          px: 4,
          m: 2,
          borderRadius: '0'
        }}
      >
        <h3 sx={{ mr: 4, fontSize: 4 }}>Ты можешь подписаться</h3>
        <ul sx={{ fontSize: 3 }}>
          <li>
            <LinkUI
              href="https://t.me/metaunity"
              target="_blank"
              rel="norefferer noopener"
            >
              Канал в Телеграме
            </LinkUI>
          </li>
          <li>
            <LinkUI
              href="https://t.me/metabaza"
              target="_blank"
              rel="norefferer noopener"
            >
              Наш чат
            </LinkUI>
          </li>
          <li>
            <LinkUI
              href="https://someta.site/rss.xml"
              target="_blank"
              rel="norefferer noopener"
            >
              РСС
            </LinkUI>
          </li>
        </ul>
      </Box>
    </AuthorBanner>
  );
};

export default PromoBanner;
