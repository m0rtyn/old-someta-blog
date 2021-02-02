/** @jsx jsx */
import { jsx } from 'theme-ui';
import { uid } from 'react-uid';

const tagStyles = {
  display: 'inline-block',
  padding: [1],
  marginRight: [2]
};

export const Tags = ({ tags }) => {
  if (!tags || tags.length === 0) return null;
  const tagsStrings = tags && tags.map(el => `#${el}`);

  return (
    <div
      sx={{
        margin: '1em 0'
      }}
    >
      {tagsStrings.map(t => {
        const key = uid(t);

        return (
          <span key={key} sx={tagStyles}>
            {t}
          </span>
        );
      })}
    </div>
  );
};
