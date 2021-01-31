/** @jsx jsx */

import React from 'react';
import { jsx } from 'theme-ui';
import { BlogItem } from 'components/blog-item';

const BlogItems = ({ items }) => {
  if (!items) return null;

  return (
    <>
      {items.nodes.map(node => (
        <BlogItem item={node} />
      ))}
    </>
  );
};

export default BlogItems;
