/** @jsx jsx */
import { MDXRenderer } from 'gatsby-plugin-mdx';
import get from 'lodash/get';
import { jsx, Styled } from 'theme-ui';
import { Flex, Box } from '@theme-ui/components';
import ContentBottomMdx from 'gatsby-theme-chronoblog/src/content-bottom.mdx';
import useSiteMetadata from 'gatsby-theme-chronoblog/src/hooks/use-site-metadata';
import CoverImage from 'gatsby-theme-chronoblog/src/components/cover-image';
import Date from 'gatsby-theme-chronoblog/src/components/date';
import Layout from 'gatsby-theme-chronoblog/src/components/layout';
import SEO from 'gatsby-theme-chronoblog/src/components/seo';
import Tags from 'gatsby-theme-chronoblog/src/components/tags';
import CommentsBlock from 'components/CommentsBlock';
import PostFooterMdx from 'gatsby-theme-chronoblog/post-footer';

const PostTitle = ({
  data: {
    mdx: { frontmatter }
  }
}) => {
  return (
    <div>
      {frontmatter.title ? (
        <Styled.h1>{frontmatter.title}</Styled.h1>
      ) : (
          ''
        )
      }
    </div >
  );
};

const PostContent = ({
  data: {
    mdx: { body }
  }
}) => (
    <Box px={[3, 0]}>
      <MDXRenderer>{body}</MDXRenderer>
    </Box>
  )

/* eslint-disable complexity */
const getDescriptionForSeo = (fromFrontmatter, fromExcerpt) => {
  if (fromFrontmatter && fromFrontmatter !== '') return fromFrontmatter;
  if (fromExcerpt && fromExcerpt !== '') return fromExcerpt;

  return '';
};

const PostFooter = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <div sx={{ mt: '32px', mb: '32px' }}>
      {PostFooterMdx && PostFooterMdx !== '' ? (
        <PostFooterMdx siteMetadata={siteMetadata} />
      ) : (
          ''
        )}
    </div>
  );
};

export const Post = ({ data }) => {
  const description = getDescriptionForSeo(
    data.mdx.frontmatter.description,
    data.mdx.excerpt
  );
  const imagePath = get(
    data,
    'mdx.frontmatter.cover.childImageSharp.fluid.src',
    ''
  );
  const postInfoStyles = {
    opacity: 1,
    zIndex: 1,
    backgroundColor: 'transparent',
    color: 'background',
    fontSize: [0, 1],
    fontFamily: 'monospace',
    textShadow: '0px 0px 2px var(--color-dark), 0 0 8px var(--color-dark)',
    textAlign: ['left', 'right'],
    p: 0,
    ml: 'auto',
  }

  //
  return (
    <Layout>
      <SEO
        title={data.mdx.frontmatter.title}
        slug={data.mdx.fields.slug}
        description={description}
        image={imagePath}
        canonical={data.mdx.fields.slug}
      />

      <main>
        <article>
          <header>
            <Flex sx={{ zIndex: 1, position: "relative", mb: ["-62px", "-38px"], px: 4, pt: 2 }}>
              <Tags
                type="item"
                tags={data.mdx.frontmatter.tags}
                tagStyle={postInfoStyles}
              />
              <Date
                date={data.mdx.frontmatter.date}
                sx={postInfoStyles}
              />
            </Flex>

            <CoverImage data={data.mdx} type="post" />
            <PostTitle px={[3, 0]} data={data} />
          </header>

          <PostContent data={data} />

          <footer sx={{ marginTop: '16px' }}>
            <PostFooter />
            <CommentsBlock
              pathName={data.mdx.fields.slug}
              postTitle={data.mdx.frontmatter.title}
              postId={data.mdx.id}
            />
          </footer>
        </article>
      </main>

      <aside>
        <ContentBottomMdx />
      </aside>
    </Layout>
  );
};

export default Post;
