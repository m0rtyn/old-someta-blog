/** @jsx jsx */
import { Link } from 'gatsby';
import _ from 'lodash';
import { jsx } from 'theme-ui';

import useSiteMetadata from 'gatsby-theme-chronoblog/src/hooks/use-site-metadata';
import Button from 'gatsby-theme-chronoblog/src/components/button';

export const AllTagsButton = ({ style }) => {
  const {
    uiText: { allTagsButton }
  } = useSiteMetadata();

  //
  return (
    <Link to="/tags">
      <Button sx={style} variant="special">
        {allTagsButton}
      </Button>
    </Link>
  );
};
