/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Date } from './blog-item-date';
import { BlogItemType } from './blog-item-type';
import { Title } from './blog-item-title';
import { Tags } from './blog-item-tags';
import { Description } from './blog-item-description';
import { CoverImage } from './blog-item-cover-image';

export const BlogMedia = ({ item }) => {
  const {
    name,
    tags,
    publish_date,
    content_type,
    html,
    desc,
    cover_image,
    slug
  } = item;

  return (
    <>
      <CoverImage image={cover_image} slug={slug} />
      <Date date={publish_date?.startDate} />
      <BlogItemType type={content_type} />
      <Title title={name} />

      <Description description={desc} />
      {/* commented to avoid many embed youtube videos */}
      {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
      <Tags tags={tags} />
    </>
  );
};
