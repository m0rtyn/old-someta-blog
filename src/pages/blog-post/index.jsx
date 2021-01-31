/** @jsx jsx */

import { jsx } from 'theme-ui';
import { graphql } from 'gatsby';
import Layout from 'gatsby-theme-chronoblog/src/components/layout';

const BlogPostPage = ({ data }) => {
  const {
    posts: { name, tags, html, url, slug }
  } = data;

  return (
    <Layout>
      <div id="main">
        {/* <div>{tags && tags.join(', ')}</div>  */}
        <h1>{name}</h1>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

export default BlogPostPage;

export const query = graphql`
  query($slug: String) {
    posts(slug: { eq: $slug }) {
      html
      name
      tags
      url
    }
  }
`;
