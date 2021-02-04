/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

export const Date = ({ date }) => {
  if (!date) return null;

  return (
    <span
      sx={{
        position: 'absolute',
        display: 'inline-block',
        right: 0,
        top: 0,
        m: 2,
        color: '#000a',
        backgroundColor: '#fffa',
        borderRadius: 'card',
        px: 1
      }}
    >
      {date}
    </span>
  );
};
