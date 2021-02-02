/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

const { h2: SecondTitle } = Styled;

export const Title = ({ title }) => {
  return (
    <SecondTitle sx={{ maxWidth: '600px' }}>{title}</SecondTitle>
  );
};
