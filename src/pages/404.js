import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import Head from '../components/head';
import FocalContain from '../components/focalContain';

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <FocalContain>
        <h1>Page not found</h1>
        <Link to="/">Head back to home</Link>
      </FocalContain>
    </Layout>
  )
}

export default NotFound;