import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';
import FocalContain from '../components/focalContain';
import '../styles/globalStyles.scss';

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <FocalContain>
        <h1>Hello</h1>
        <h2>Hi welcome to my blog, please stay and read something...</h2>
        <p>Need a developer?<Link to='/contact'> Contact me</Link></p>
      </FocalContain>
    </Layout>
  )
}

export default IndexPage;
