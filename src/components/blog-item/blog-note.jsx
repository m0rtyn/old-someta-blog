/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { CoverImage } from './blog-item-cover-image';
import { Date } from './blog-item-date';
import { BlogItemType } from './blog-item-type';
import { Title } from './blog-item-title';
import { Tags } from './blog-item-tags';
import { wrapperStyles } from './blog-article';

export const BlogNote = ({ item }) => {
  const {
    name,
    tags,
    publish_date,
    cover_image,
    slug,
    content_type,
    html
  } = item;

  console.log('🚀 ~ BlogNote ~ html', html);

  return (
    <article sx={wrapperStyles}>
      <Date date={publish_date?.startDate} />
      <BlogItemType type={content_type} />
      <Title title={name} />

      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Tags tags={tags} />
    </article>
  );
};
