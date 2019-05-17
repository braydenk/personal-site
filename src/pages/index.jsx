import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostListItem from '../components/post-list-item';
import styles from '../styles/index-page.module.css';

export default function IndexPage({ data }) {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <main className={styles.postListContainer}>
        {posts.map(({ node }) => (
          <PostListItem
            key={node.id}
            title={node.frontmatter.title}
            excerpt={node.excerpt}
          />
        ))}
      </main>
    </Layout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    node: PropTypes.shape({
      id: PropTypes.string,
      excerpt: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
