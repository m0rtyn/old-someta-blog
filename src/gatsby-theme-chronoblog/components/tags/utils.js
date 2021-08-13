import _ from 'lodash';

/**
 * @param {string[]} tagsArray
 */
export const createTagsStatistics = tagsArray => {
  const uniqTags = _.uniq(tagsArray);
  const tagsWithStats = uniqTags.map(uTag => {
    const tagsArrayThisTag = tagsArray.filter(t => t === uTag);

    return { tagName: uTag, tagStat: tagsArrayThisTag.length };
  });

  return tagsWithStats;
};

export const sortTags = tags => {
  const arraySortedByStats = _.sortBy(tags, ['tagStat']).reverse();

  return arraySortedByStats;
};
