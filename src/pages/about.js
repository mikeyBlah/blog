import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import FocalContain from '../components/focalContain';

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <FocalContain>
        <h1>About</h1>
        <h2>Display a uninteresting description about yourself</h2>
      </FocalContain>
    </Layout>
  )
}

export default AboutPage;