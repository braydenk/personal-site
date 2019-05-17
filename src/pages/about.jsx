import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function About() {
  return (
    <Layout title="About">
      <SEO title="About" keywords={['gatsby', 'application', 'react']} />
      <p>The about page</p>
    </Layout>
  );
}
