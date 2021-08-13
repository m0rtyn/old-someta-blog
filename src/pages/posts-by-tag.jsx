/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { graphql } from 'gatsby';
import ProjectBanner from 'components/ProjectBanner';
import BlogItems from 'components/BlogItems';
import Layout from 'gatsby-theme-chronoblog/src/components/layout';
// import { Tags } from 'gatsby-theme-chronoblog/src/components/tags';
import { ShowMoreButton } from 'components/show-more-button';

export const PostsByTagPage = ({ data }) => {
  const { allPosts } = data;
  const { nodes: posts } = allPosts;

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

// export const query = graphql`
//   query($tagName: String) {
//     allPosts(tags: { in: $tagName }) {
//       nodes {
//         name
//         tags
//         desc
//         content_type
//         status
//         url
//         html
//         slug
//         cover_image
//         publish_date {
//           startDate(formatString: "DD MMM YYYY", fromNow: false)
//         }
//         last_edited_time
//       }
//     }
//   }
// `;
