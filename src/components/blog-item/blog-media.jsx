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
    desc,
    cover_image,
    slug,
    url
  } = item;

  const noStyleLink = {
    display: 'block',
    textDecoration: 'none',
    color: 'inherit'
  };

  return (
    <a
      className="hover-on"
      rel="noopener noreferrer"
      target="_blank"
      href={url}
      sx={noStyleLink}
    >
      <CoverImage image={cover_image} slug={slug} />
      <Date date={publish_date?.startDate} />
      <BlogItemType type={content_type} />
      <Title title={name} />

      <Description description={desc} />
      <Tags tags={tags} />
    </a>
  );
};
