// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postPage = await graphql(`
    query {
      allPosts(
        filter: { status: { eq: true }, content_type: { ne: "note" } }
      ) {
        nodes {
          slug
          url
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors);
    }

    result.data.allPosts.nodes.forEach(({ slug, url }) => {
      createPage({
        path: `/${url || slug}`,
        component: path.resolve(
          `./src/components/blog-post/index.jsx`
        ),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug
        }
      });
    });
  });

  // const queryResult = await graphql(`
  //   query {
  //     allPosts(filter: { status: { eq: true } }) {
  //       group(field: tags) {
  //         fieldValue
  //         totalCount
  //       }
  //     }
  //   }
  // `).then(result => {
  //   if (result.errors) {
  //     Promise.reject(result.errors);
  //   }
  // });

  // const tagsGroup = queryResult.data.allPosts.group;
  // const tagPage = tagsGroup.forEach(
  //   ({ fieldValue: tagName, totalCount: tagStat }) => {
  //     createPage({
  //       path: `/${tagName}`,
  //       component: path.resolve('./src/pages/posts-by-tag.jsx'),
  //       context: {
  //         tagName,
  //         tagStat
  //       }
  //     });
  //   }
  // );

  // return Promise.all([postPage, tagPage]);
  return Promise.all([postPage]);
};
