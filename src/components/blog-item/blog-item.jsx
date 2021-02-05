/** @jsx jsx */
import { jsx } from 'theme-ui';
import { BlogArticle } from './blog-article';
import { BlogNote } from './blog-note';
import { BlogMedia } from './blog-media';
import { BlogItemWrapper } from './blog-item-wrapper';

const blogItemComponentMap = {
  article: BlogArticle,
  note: BlogNote,
  media: BlogMedia
};

export const BlogItem = ({ item }) => {
  const contentType = item.content_type;

  if (contentType === '') return null;

  const BlogItemComponent = blogItemComponentMap[contentType];

  return (
    <BlogItemWrapper type={contentType} url={item.url}>
      <BlogItemComponent item={item} />
    </BlogItemWrapper>
  );
};
