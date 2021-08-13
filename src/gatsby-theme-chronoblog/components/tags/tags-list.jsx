/** @jsx jsx */
import { Badge, Flex } from '@theme-ui/components';
import _ from 'lodash';
import { jsx } from 'theme-ui';

import { Tag } from './tag';
import { AllTagsButton } from './all-tags-button';

/**
 * @typedef {object} TagsProps
 * @property {TagWithStat[]} tagsWithStat
 * @property {string} type
 * @property {boolean=} showAllTagsButton
 * @property {boolean=} showStatsNumber
 * @property {string=} pageContextTag
 * @property {object=} tagStyle
 */

/**
 * @param {TagsProps=} props
 */
export const TagsList = ({
  type = 'feed',
  showAllTagsButton = false,
  showStatsNumber = true,
  tagsWithStat,
  pageContextTag,
  tagStyle
}) => {
  const style = {
    '&:hover': {
      color: 'secondary',
      opacity: 1,
      backgroundColor: 'transparent',
      boxShadow: '0 0 0 8px transparent, 0 0 0 3px secondary'
    },
    color: 'background',
    mr: [1, 1],
    mb: [1, 1],
    px: [2, 3],
    py: [1, 2],
    fontSize: [0, 1],
    opacity: 1,
    ...tagStyle
  };

  //
  return (
    <Flex sx={{ flexWrap: 'wrap' }}>
      {type === 'feed' && showAllTagsButton ? (
        <AllTagsButton style={{ ...style, color: 'muted' }} />
      ) : (
        ''
      )}

      {tagsWithStat.map(tws => (
        <Tag
          key={tws.tagName}
          showStatsNumber={showStatsNumber}
          tagWithStat={tws}
          pageContextTag={pageContextTag}
          style={style}
        />
      ))}
    </Flex>
  );
};
