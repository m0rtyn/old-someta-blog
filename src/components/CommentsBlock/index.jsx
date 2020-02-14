/** @jsx jsx */

import { jsx } from 'theme-ui';
import React from 'react';
import { Disqus, CommentCount } from 'gatsby-plugin-disqus';

const CommentsBlock = ({
  pathName = '/common-tread',
  postId = 'common-tread',
  postTitle = 'common-tread'
}) => {
  const siteUrl = 'https://martyn.guru';

  const disqusConfig = {
    url: `${siteUrl + pathName}`,
    identifier: postId,
    title: postTitle
  };

  return (
    <>
      {/* <CommentCount config={disqusConfig} placeholder="..." /> */}
      <Disqus config={disqusConfig} />
    </>
  );
};

export default CommentsBlock;
