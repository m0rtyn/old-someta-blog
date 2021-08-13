/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { graphql } from 'gatsby';
import ProjectBanner from 'components/ProjectBanner';
import BlogItems from 'components/BlogItems';
import Layout from 'gatsby-theme-chronoblog/src/components/layout';
import { ShowMoreButton } from 'components/show-more-button';

const HomePage = ({ data }) => {
  const { allPosts } = data;
  const { group: tags, nodes: posts } = allPosts;
  const adaptedTags = tags.map(tag => ({
    tagName: tag.fieldValue,
    tagStat: tag.totalCount
  }));

  const [toShowCount, setShowCount] = React.useState(13);

  const showMorePosts = React.useCallback(
    () => setShowCount(130),
    []
  );

  return (
    <Layout>
      <ProjectBanner />
      {/* <Tags tags={adaptedTags} /> */}
      <BlogItems items={posts} limit={toShowCount} />

      <ShowMoreButton
        toShowCount={toShowCount}
        showMorePosts={showMorePosts}
      />
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
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
