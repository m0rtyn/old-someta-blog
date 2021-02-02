/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

const { p: Paragraph } = Styled;

export const Description = ({ description }) => {
  if (!description) return null;

  return <Paragraph>{description}</Paragraph>;
};
