/** @jsx jsx */
import { jsx } from 'theme-ui';

import CoverImage from 'gatsby-theme-chronoblog/src/components/cover-image';
import Date from 'gatsby-theme-chronoblog/src/components/date';
import { CommentCount } from 'gatsby-plugin-disqus';
import Tags from 'gatsby-theme-chronoblog/components/tags';
import { SITE_URL } from 'constants/common'
import CardComponents from './card-components';

const Card = CardComponents;

// eslint-disable-next-line react/display-name
export default ({ item, isHovering, linksBeforeTitle = '' }) => {
  const disqusConfig = {
    url: `${SITE_URL + item.fields.slug}`,
    title: item.frontmatter.title,
    identifier: item.id
  }

  return (
    <article sx={{ mb: '40px', mt: '24px', color: 'text', overflow: 'hidden' }}>
      <Card.HoveringStyle isHovering={isHovering}>
        <Card.Link item={item}>
          <CoverImage data={item} type="card" />
        </Card.Link>
        <Card.Body item={item}>
          <Card.Link item={item}>
            <div sx={{ pt: ['8px', '16px'], mb: 2 }}>
              <Card.Title item={item} linksBeforeTitle={linksBeforeTitle} />
              <Card.LinkText item={item} />
              <Date date={item.frontmatter.date} sx={{ display: 'inline', mr: 4 }} />
              <CommentCount config={disqusConfig} placeholder="no comments" sx={{ opacity: "0.8" }} />
            </div>
          </Card.Link>
          <Card.Content item={item} />
          <Card.Link item={item}>
            <Card.ReadMoreButton item={item} />
          </Card.Link>
          <div sx={{ marginTop: '20px' }}>
            <Tags type="item" tags={item.frontmatter.tags} />
          </div>
        </Card.Body>
      </Card.HoveringStyle>
    </article>
  );
};