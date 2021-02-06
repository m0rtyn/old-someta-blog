/** @jsx jsx */

import { jsx, Styled } from 'theme-ui';
import { graphql } from 'gatsby';
import Layout from 'gatsby-theme-chronoblog/src/components/layout';
import SEO from 'gatsby-theme-chronoblog/src/components/seo';
import CommentsBlock from 'components/CommentsBlock';
import useSiteMetadata from 'gatsby-theme-chronoblog/src/hooks/use-site-metadata';
import PostFooterMdx from 'gatsby-theme-chronoblog/post-footer';
import { parseNotionImageUrl } from 'components/blog-item/utils';
import { Date } from 'components/blog-item/blog-item-date';
import { Tags } from 'components/blog-item/blog-item-tags';

const { h1: FirstTitle } = Styled;

const PostFooter = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <div sx={{ my: [4] }}>
      {PostFooterMdx && PostFooterMdx !== '' ? (
        <PostFooterMdx siteMetadata={siteMetadata} />
      ) : (
        ''
      )}
    </div>
  );
};

const BlogPostPage = ({ data }) => {
  const {
    posts: {
      name,
      tags,
      html,
      url,
      slug,
      desc,
      cover_image,
      publish_date
    }
  } = data;

  const coverImageURL =
    cover_image && parseNotionImageUrl(cover_image[0], 400, slug);

  const postDate = publish_date?.startDate;

  return (
    <Layout>
      <SEO
        title={name}
        slug={url}
        description={desc}
        image={coverImageURL || ''}
        canonical={url}
      />

      <main>
        <article>
          <header sx={{ position: 'relative' }}>
            <Tags tags={tags} />
            <Date date={postDate} />

            {/* <CoverImage data={data.mdx} type="post" /> */}
          </header>

          <FirstTitle>{name}</FirstTitle>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: html }} />

          <footer sx={{ marginTop: '16px' }}>
            <PostFooter />
            <CommentsBlock
              pathName={`/${url}`}
              postTitle={name}
              // postId={data.mdx.id}
              postId={slug}
            />
          </footer>
        </article>
      </main>
    </Layout>
  );
};

export default BlogPostPage;

export const query = graphql`
  query($slug: String) {
    posts(slug: { eq: $slug }) {
      html
      name
      tags
      url
      cover_image
      desc
      slug
      publish_date {
        startDate(formatString: "DD MMM YYYY", fromNow: false)
      }
    }
  }
`;
