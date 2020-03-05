//Functions to export
const path = require('path');
// //Function called when a node has been created
// module.exports.onCreateNode = ({node, actions}) => {
//   const { createNodeField } = actions;
//   if(node.internal.type === 'MarkdownRemark') {
    
    //Get the file path basename to use as a slug
    // const slug = path.basename(node.fileAbsolutePath, '.md');
    
//     //Create the node field slug
//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug
//     })
//   }
// }
// The above was used for markdown, not needed as the slugs are now created in Contentful
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve('./src/templates/blog.js');
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  
  res.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })

}