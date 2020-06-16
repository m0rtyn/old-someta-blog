/** @jsx jsx */
import { MDXRenderer } from 'gatsby-plugin-mdx';
import get from 'lodash/get';
import { jsx, Styled } from 'theme-ui';
import { Flex, Box } from '@theme-ui/components';
import ContentBottomMdx from 'gatsby-theme-someta/src/content-bottom.mdx';
import useSiteMetadata from 'gatsby-theme-someta/src/hooks/use-site-metadata';
import CoverImage from 'gatsby-theme-someta/src/components/cover-image';
import Date from 'gatsby-theme-someta/src/components/date';
import Layout from 'gatsby-theme-someta/src/components/layout';
import SEO from 'gatsby-theme-someta/src/components/seo';
import Tags from 'gatsby-theme-someta/src/components/tags';
import CommentsBlock from 'components/CommentsBlock';
import PostFooterMdx from 'gatsby-theme-someta/post-footer';

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
    <Box px={[0]}>
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
    zIndex: 1,
    color: 'background',
    fontSize: [0, 1],
    fontFamily: 'monospace',
    textAlign: ['left', 'right'],
    padding: [1, 2],
    ml: 'auto',
    flexShrink: 0,
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
          <header sx={{ position: "relative" }}>
            <Flex sx={{
              zIndex: 1, position: "absolute", p: [0, 1], backgroundColor: ['text'], opacity: 0.66, width: "100%"
            }}>
              <Tags
                type="item"
                tags={data.mdx.frontmatter.tags}
                tagStyle={postInfoStyles}
                showStatsNumber={false}
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
