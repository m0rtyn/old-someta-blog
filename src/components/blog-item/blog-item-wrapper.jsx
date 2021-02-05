/* @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

export const wrapperStyles = {
  p: [4],
  pt: [2],
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

export const BlogItemWrapper = ({ children, url, type }) => {
  const withLink = type === 'article';

  return withLink ? (
    <Link to={`/${url}`} sx={{ ...linkSyles, ...hoverStyles }}>
      <article sx={wrapperStyles}>{children}</article>
    </Link>
  ) : (
    <article sx={wrapperStyles}>{children}</article>
  );
};
