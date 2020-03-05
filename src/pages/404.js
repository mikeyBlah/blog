import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import Head from '../components/head';

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1>Page not found</h1>
      <Link to="/">Head back to home</Link>
    </Layout>
  )
}

export default NotFound;