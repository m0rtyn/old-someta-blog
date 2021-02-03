/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import GatsbyImage from 'gatsby-image';
import get from 'lodash/get';
import { parseNotionImageUrl } from './utils';

const heightMain = 366;
const heightMobile = 183;
const heightArray = [heightMobile, heightMain];
const backdropFilterValue = `blur(9px) contrast(100%)`;

const imageStyles = {
  // objectFit: 'cover',

  backdropFilter: backdropFilterValue,
  WebkitBackdropFilter: backdropFilterValue,
  maxHeight: heightArray,
  minHeight: heightArray,
  objectFit: 'scale-down',
  objectPosition: '50% 50%'
  // borderRadius: 'card',
  // ...borderRadiusForCard
  // }}
  // imgStyle={{
  // }}
};

export const CoverImage = ({ image, slug }) => {
  if (!image) return null;
  const coverImageWidth = 549;
  const coverImageURL = parseNotionImageUrl(
    image[0],
    coverImageWidth,
    slug
  );
  const coverThumbnailURL = parseNotionImageUrl(image[0], 100, slug);

  return (
    <div
      css={`
        @supports (backdrop-filter: blur(5px)) {
          background-color: rgba(255, 255, 255, 0);
        }
        background-color: rgba(40, 40, 40, 0.7);
      `}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        backdropFilter: backdropFilterValue,
        WebkitBackdropFilter: backdropFilterValue,
        backgroundImage: `url(${coverThumbnailURL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        maxHeight: heightArray,
        mt: -2,
        mx: -4
      }}
    >
      <img src={coverImageURL} alt={image} sx={imageStyles} />
    </div>
  );
};
