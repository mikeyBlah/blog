import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import FocalContain from '../components/focalContain';

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <FocalContain>
        <h1>Contact</h1>
        <h2>Display email...</h2>
      </FocalContain>
    </Layout> 
  )
}

export default ContactPage;