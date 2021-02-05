/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Date } from './blog-item-date';
import { BlogItemType } from './blog-item-type';
import { Title } from './blog-item-title';
import { Tags } from './blog-item-tags';
import { Description } from './blog-item-description';

export const BlogMedia = ({ item }) => {
  const { name, tags, publish_date, content_type, html, desc } = item;

  return (
    <>
      <Date date={publish_date?.startDate} />
      <BlogItemType type={content_type} />
      <Title title={name} />

      <Description description={desc} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Tags tags={tags} />
    </>
  );
};
