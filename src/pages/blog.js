import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';
import blogStyles from '../styles/blog.module.scss';
import Head from '../components/head';

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
        fields: publishedDate,
        order: DESC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "DD-MM-YY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog Posts</h1>
      <h2>This is where my blogs will be posted</h2>
      <ul>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li className={blogStyles.blogListItem}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default BlogPage;