/** @jsx jsx */
import { jsx } from 'theme-ui';
import { TagsList } from './tags-list';
import { sortTags } from './utils';

const getTrendyTags = tags => {
  return tags.filter(tag => tag.tagStat > 2);
};

/**
 * @typedef {object} Props
 * @property {'feed' | 'item'=} type
 * @property {boolean=} showAllTagsButton
 * @property {boolean=} showStatsNumber
 * @property {string[]=} tags
 * @property {string=} pageContextTag
 * @property {object=} tagStyle
 */

// eslint-disable-next-line react/display-name, complexity
export const Tags = ({
  tags,
  type = 'feed',
  showAllTagsButton = false,
  showStatsNumber = true,
  pageContextTag,
  tagStyle
}) => {
  const sortedTags = sortTags(tags);

  const trendyTags = getTrendyTags(sortedTags);

  return (
    <div id="tags" sx={{ my: [20] }}>
      <TagsList
        type={type}
        showStatsNumber={showStatsNumber}
        showAllTagsButton={showAllTagsButton}
        tagsWithStat={trendyTags}
        pageContextTag={pageContextTag}
        tagStyle={tagStyle}
      />
    </div>
  );

  // if (tags && tags.length > 0) {
  //   const tagsToShow = tags
  //     .filter(t => typeof t === 'string')
  //     .filter(Boolean);

  //   if (!tagsToShow) return null;

  //   const tagsToShowWithStat = tagsToShow
  //     .map(tts => _.find(tagsWithStat, { tagName: tts }))
  //     .filter(Boolean);

  //   if (tagsToShowWithStat) {
  //     const sortedTags = sortTags(tagsToShowWithStat);
  //     const trendyTags = getTrendyTags(sortedTags);

  //     return (
  //       <TagsList
  //         type={type}
  //         showStatsNumber={showStatsNumber}
  //         tagsWithStat={trendyTags}
  //         tagStyle={tagStyle}
  //       />
  //     );
  //   }
  // }

  // return null;
};
