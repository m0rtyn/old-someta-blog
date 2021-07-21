/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { graphql } from 'gatsby';
import ProjectBanner from 'components/ProjectBanner';
import BlogItems from 'components/BlogItems';
import Layout from 'gatsby-theme-chronoblog/src/components/layout';
import Button from 'gatsby-theme-chronoblog/src/components/button';

const HomePage = ({ data }) => {
  const { allPosts } = data;
  const [toShowCount, setShowCount] = React.useState(13);

  const showMorePosts = React.useCallback(
    () => setShowCount(130),
    []
  );

  const buttonStyles = {
    fontSize: [3, 4],
    mx: 'auto',
    my: [3, 4],
    display: 'block'
  };

  return (
    <Layout>
      <ProjectBanner />
      {/* <Tags /> */}
      <BlogItems items={allPosts} limit={toShowCount} />

      {toShowCount === 13 ? (
        <Button
          onClick={showMorePosts}
          sx={buttonStyles}
          type="button"
        >
          Показать больше постов
        </Button>
      ) : null}
    </Layout>
  );
};

export default HomePage;

export const query = graphql`
  query {
    allPosts(
      filter: {
        status: { eq: true }
        tags: { ne: "personal" }
        content_type: { ne: "page" }
      }
      sort: { fields: [last_edited_time], order: DESC }
    ) {
      nodes {
        name
        tags
        desc
        content_type
        status
        url
        html
        slug
        cover_image
        publish_date {
          startDate(formatString: "DD MMM YYYY", fromNow: false)
        }
        last_edited_time
      }
    }
  }
`;
