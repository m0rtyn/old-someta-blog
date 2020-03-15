/** @jsx jsx */

import { jsx } from 'theme-ui';
import React from 'react';
import { Disqus } from 'gatsby-plugin-disqus';
import { SITE_URL } from 'constants/common'

const CommentsBlock = ({
  pathName = '/common-tread',
  postId = 'common-tread',
  postTitle = 'common-tread'
}) => {

  const disqusConfig = {
    url: `${SITE_URL}${pathName}`,
    identifier: postId,
    title: postTitle
  };

  return (
    <>
      <Disqus config={disqusConfig} />
    </>
  );
};

export default CommentsBlock;
