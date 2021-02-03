/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import { Description } from './blog-item-description';
import { CoverImage } from './blog-item-cover-image';
import { Date } from './blog-item-date';
import { BlogItemType } from './blog-item-type';
import { Title } from './blog-item-title';
import { Tags } from './blog-item-tags';

export const wrapperStyles = {
  py: [2],
  px: [4],
  my: [4],
  border: '2px solid var(--color-dark)',
  borderRadius: 'card',
  position: 'relative'
};

export const linkSyles = {
  display: 'block',
  color: 'initial',
  textDecoration: 'none',
  borderRadius: 'card',
  boxShadow: '-4px 4px 0px 0px var(--color-gray)'
};

export const hoverStyles = {
  transitionDuration: '0.3s',
  transitionProperty: 'box-shadow, transform, opacity',
  transitionTimingFunction: 'ease-out',
  ':hover, :focus, :active': {
    opacity: '0.9',
    transform: 'translate(8px,-8px)',
    boxShadow: '-12px 12px 0px 0px var(--color-gray)'
  }
};

export const BlogArticle = ({ item }) => {
  const {
    name,
    tags,
    url,
    desc,
    publish_date,
    content_type,
    cover_image,
    slug
  } = item;

  return (
    <Link to={`/${url}`} sx={{ ...linkSyles, ...hoverStyles }}>
      <article sx={wrapperStyles}>
        <CoverImage image={cover_image} slug={slug} />
        <Date date={publish_date?.startDate} />
        <BlogItemType type={content_type} />
        <Title title={name} />
        <Description description={desc} />
        <Tags tags={tags} />
      </article>
    </Link>
  );
};
