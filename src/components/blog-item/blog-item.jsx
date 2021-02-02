/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { BlogArticle } from './blog-article';
import { BlogNote } from './blog-note';

export const BlogItem = ({ item }) => {
  if (item.content_type === 'article') {
    return <BlogArticle item={item} />;
  }

  if (item.content_type === 'note') {
    return <BlogNote item={item} />;
  }

  return null;
};
