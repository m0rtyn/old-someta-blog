/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { parseNotionImageUrl } from './utils';

const imageStyles = {
  objectFit: 'cover',
  maxHeight: '300px'
};

export const CoverImage = ({ image, slug }) => {
  if (!image) return null;
  const coverImageURL = parseNotionImageUrl(image[0], 1000, slug);

  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <img src={coverImageURL} alt={image} sx={imageStyles} />
    </div>
  );
};
