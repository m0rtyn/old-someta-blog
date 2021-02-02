/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

export const Date = ({ date }) => {
  if (!date) return null;

  return (
    <span
      sx={{
        position: 'absolute',
        right: 0,
        top: 0,
        mx: 4,
        my: 2,
        color: 'var(--color-gray)'
      }}
    >
      {date}
    </span>
  );
};
