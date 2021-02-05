/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Date } from './blog-item-date';
import { BlogItemType } from './blog-item-type';
import { Title } from './blog-item-title';
import { Tags } from './blog-item-tags';

export const BlogNote = ({ item }) => {
  const { name, tags, publish_date, content_type, html } = item;

  return (
    <>
      <Date date={publish_date?.startDate} />
      <BlogItemType type={content_type} />
      <Title title={name} />

      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Tags tags={tags} />
    </>
  );
};
