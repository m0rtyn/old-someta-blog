/** @jsx jsx */

import React from 'react';
import { jsx } from 'theme-ui';
import { BlogItem } from 'components/blog-item';

const BlogItems = ({ posts }) => {
  if (!posts) return null;

  return (
    <>
      {posts.nodes.map(node => (
        <BlogItem data={node} />
      ))}
    </>
  );
};

export default BlogItems;
