/** @jsx jsx */
import { jsx } from 'theme-ui';
import CoverImage from 'gatsby-theme-someta/src/components/cover-image';
import Date from 'gatsby-theme-someta/src/components/date';
import { CommentCount } from 'gatsby-plugin-disqus';
import Tags from 'gatsby-theme-someta/components/tags';
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
            <Card.Title item={item} linksBeforeTitle={linksBeforeTitle} />
            <Card.LinkText item={item} />
            <CommentCount config={disqusConfig} placeholder="no comments" sx={{ opacity: "0.8", mr: 3 }} />
            <Date date={item.frontmatter.date} sx={{ display: 'inline' }} />
          </Card.Link>

          <Card.Content item={item} />

          <Card.Link item={item}>
            <Card.ReadMoreButton item={item} />
          </Card.Link>

          <Tags type="item" tags={item.frontmatter.tags} tagStyle={{ py: 1, px: 2, fontSize: 0, color: 'text', backgroundColor: 'background' }} showStatsNumber={false} />
        </Card.Body>
      </Card.HoveringStyle>
    </article>
  );
};