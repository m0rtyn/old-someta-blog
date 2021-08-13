/** @jsx jsx */
import { Badge } from '@theme-ui/components';
import { Link } from 'gatsby';
import _ from 'lodash';
import { jsx } from 'theme-ui';
import Button from 'gatsby-theme-chronoblog/src/components/button';

/**
 * @typedef {object} TagWithStat
 * @property {string} tagName
 * @property {number} tagStat
 */

/**
 * @typedef {object} TagProps
 * @property {TagWithStat} tagWithStat
 * @property {string=} pageContextTag
 * @property {boolean=} showStatsNumber
 * @property {object} style
 */

/**
 * @param {TagProps=} props
 */
// eslint-disable-next-line complexity
export const Tag = ({
  tagWithStat,
  style,
  pageContextTag,
  showStatsNumber
}) => {
  const active = tagWithStat.tagName === pageContextTag;
  const link = active
    ? '/tags'
    : `/tags/${_.kebabCase(tagWithStat.tagName)}`;

  if (showStatsNumber) {
    return (
      <Link to={link}>
        <Button sx={style} variant={active ? 'active' : 'primary'}>
          {'#'}
          {tagWithStat.tagName}{' '}
          <Badge variant="tags" ml={1}>
            {tagWithStat.tagStat}
          </Badge>
        </Button>
      </Link>
    );
  }

  return (
    <Link to={link}>
      <Button sx={style} variant={active ? 'active' : 'primary'}>
        #{tagWithStat.tagName}
      </Button>
    </Link>
  );
};
