/** @jsx jsx */

import React from 'react';
import { jsx } from 'theme-ui';
import { BlogItem } from 'components/blog-item';
import { uid } from 'react-uid';

const BlogItems = ({ items }) => {
  if (!items) return null;

  return (
    <>
      {items.nodes.map(node => {
        const key = uid(node);

        return <BlogItem key={key} item={node} />;
      })}
    </>
  );
};

export default BlogItems;
