/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import Button from 'gatsby-theme-chronoblog/src/components/button';

export const ShowMoreButton = ({ toShowCount, showMorePosts }) => {
  const buttonStyles = {
    fontSize: [3, 4],
    mx: 'auto',
    my: [3, 4],
    display: 'block'
  };

  return toShowCount === 13 ? (
    <Button onClick={showMorePosts} sx={buttonStyles} type="button">
      Показать больше постов
    </Button>
  ) : null;
};
