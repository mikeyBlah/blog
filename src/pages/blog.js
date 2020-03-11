import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';
import blogStyles from '../styles/blog.module.scss';
import Head from '../components/head';
import FocalContain from '../components/focalContain';
import BlogFilterBar from '../components/blogFilterBar';

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

  const blogs = [...data.allContentfulBlogPost.edges];
  console.log('Blogs', blogs);

  const filterFields = (e) => {
    console.log('useEffect in here to filter posts', e.target.innerHTML, blogs.length);
    for(let i=0; i < blogs.length; i++) {
      if(i === 1){
        console.log('Blog number 2', blogs[i]);
      }
    }
  }
  return (
    <Layout>
      <Head title="Blog" />
      <section className={blogStyles.heroImage}>
        <h1>Featured Article</h1>
        <p>This is where my featured article will be displayed</p>
      </section>
      <BlogFilterBar 
        click={filterFields}
      />
      <FocalContain>
        <ul className={blogStyles.blogListContainer}>
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
      </FocalContain>
    </Layout>
  )
}

export default BlogPage;