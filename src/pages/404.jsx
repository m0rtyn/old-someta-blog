/** @jsx jsx */
import { jsx } from 'theme-ui'
import FeedSearch from 'gatsby-theme-chronoblog/src/components/feed-search';
import Layout from 'gatsby-theme-chronoblog/src/components/layout';
import Tags from 'gatsby-theme-chronoblog/components/tags';

// eslint-disable-next-line react/display-name
export default () => {
  return (
    <Layout>
      <FeedSearch />
      <Tags />
      <h1 sx={{ fontSize: '72px', textAlign: 'center', my: '2em' }} >¯\_(ツ)_/¯</h1>
    </Layout>
  );
};