/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { graphql } from 'gatsby';
import ProjectBanner from 'components/ProjectBanner';
import BlogItems from 'components/BlogItems';
import Tags from 'gatsby-theme-chronoblog/src/components/tags';
import Layout from 'gatsby-theme-chronoblog/src/components/layout';

// import FeedItems from 'gatsby-theme-chronoblog/src/components/feed-items';

const HomePage = ({ data }) => {
  const { allPosts } = data;

  return (
    <Layout>
      <ProjectBanner />
      {/* <Tags /> */}
      <BlogItems items={allPosts} />

      {/* 
        // old blog post local source
        <FeedItems
          filter={(item) => !item.frontmatter.tags.includes('personal')}
        />
      */}
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
