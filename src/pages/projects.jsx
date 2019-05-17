import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function Projects() {
  return (
    <Layout title="Projects">
      <SEO title="Projects" keywords={['gatsby', 'application', 'react']} />
      <p>The projects page</p>
    </Layout>
  );
}
