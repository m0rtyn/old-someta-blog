/** @jsx jsx */

import React from 'react';
import { jsx, Styled } from 'theme-ui';
import { Link as LinkUI } from '@theme-ui/components';
import { Link } from 'gatsby';
import parseNotionImageUrl from './parse-notion-image-url';
import ArticleIcon from './article.inline.svg';
import NoteIcon from './note.inline.svg';
import SequenceIcon from './queue.inline.svg';

const { h2: SecondTitle, p: Paragraph } = Styled;

const wrapperStyles = {
  paddingTop: [2],
  paddingBottom: [4],
  paddingLeft: [4],
  paddingRight: [4],
  margin: '32px 0',
  border: '2px solid var(--color-dark)',
  borderRadius: '4px',
  position: 'relative'
};

const linkSyles = {
  display: 'block',
  color: 'initial',
  textDecoration: 'none',
  borderRadius: '4px',
  boxShadow: '4px 4px 0px 0px var(--color-gray)'
};

const hoverStyles = {
  transitionDuration: '0.3s',
  transitionProperty: 'box-shadow, transform, opacity',
  transitionTimingFunction: 'ease-out',
  ':hover, :focus, :active': {
    opacity: '0.9',
    transform: 'translate(-4px)',
    boxShadow: '12px 12px 0px 0px var(--color-gray)'
  }
};

const tagStyles = {
  display: 'inline-block',
  padding: [1],
  marginRight: [2]
};

const imageStyles = {
  objectFit: 'cover',
  maxHeight: '300px'
};

const Description = ({ description }) => {
  if (!description) return null;

  return <Paragraph>{description}</Paragraph>;
};

const typeToEmojiMap = {
  article: <ArticleIcon title="статья" />,
  note: <NoteIcon title="заметка" />,
  sequence: <SequenceIcon title="цепочка" />
};

const PostType = ({ type }) => {
  if (!type) return null;

  return (
    <span
      title={type}
      sx={{
        // fontSize: '2em',
        position: 'absolute',
        top: '0',
        left: '0',
        margin: '1em',
        color: 'var(--color-gray)'
      }}
    >
      {typeToEmojiMap[type]}
    </span>
  );
};

const Title = ({ title }) => {
  return (
    <SecondTitle sx={{ maxWidth: '600px' }}>{title}</SecondTitle>
  );
};

const Date = ({ date }) => {
  if (!date) return null;

  return (
    <span
      sx={{
        position: 'absolute',
        right: 0,
        top: 0,
        margin: '1em',
        color: 'var(--color-gray)'
      }}
    >
      {date}
    </span>
  );
};

const Tags = ({ tags }) => {
  if (!tags || tags.length === 0) return null;

  const tagsStrings = tags && tags.map(el => `#${el}`);

  return (
    <div sx={{ margin: '1em 0' }}>
      {tagsStrings.map(t => {
        return <span sx={tagStyles}>{t}</span>;
      })}
    </div>
  );
};

const CoverImage = ({ image, slug }) => {
  if (!image) return null;

  const coverImageURL = parseNotionImageUrl(image[0], 1000, slug);

  return (
    <div sx={{ display: 'flex', justifyContent: 'center' }}>
      <img src={coverImageURL} alt={image} sx={imageStyles} />
    </div>
  );
};

const BlogNote = ({ item }) => {
  const {
    name,
    tags,
    publish_date,
    cover_image,
    slug,
    content_type,
    html
  } = item;

  return (
    <article sx={wrapperStyles}>
      <CoverImage image={cover_image} slug={slug} />
      <Date date={publish_date?.startDate} />
      <PostType type={content_type} />
      <div>{html}</div>
      <Title title={name} />
      <Tags tags={tags} />
    </article>
  );
};

const BlogArticle = ({ item }) => {
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
      <LinkUI sx={hoverStyles}>
        <article sx={wrapperStyles}>
          <CoverImage image={cover_image} slug={slug} />
          <Date date={publish_date?.startDate} />
          <PostType type={content_type} />
          <Title title={name} />
          <Description description={desc} />
          <Tags tags={tags} />
        </article>
      </LinkUI>
    </Link>
  );
};

const BlogItem = ({ item }) => {
  if (item.content_type === 'article') {
    return <BlogArticle item={item} />;
  }

  if (item.content_type === 'note') {
    return <BlogNote item={item} />;
  }

  return null;
};

export default BlogItem;
