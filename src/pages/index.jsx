import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostListItem from '../components/post-list-item';
import styles from '../styles/index-page.module.css';

export default function IndexPage({ data }) {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout title={siteTitle}>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />

      <main className={styles.postListContainer}>
        {posts.map(({ node }) => (
          <PostListItem key={node.id} title={node.frontmatter.title} />
        ))}
      </main>
    </Layout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
