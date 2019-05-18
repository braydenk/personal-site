import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostListItem from '../components/post-list-item';

export default function IndexPage({ data }) {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      {posts.map(({ node }) => (
        <PostListItem
          key={node.id}
          link={node.fields.slug}
          title={node.frontmatter.title}
          excerpt={node.excerpt}
        />
      ))}
    </Layout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    node: PropTypes.shape({
      id: PropTypes.string,
      excerpt: PropTypes.string,
      fields: PropTypes.shape({
        slug: PropTypes.string,
      }),
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
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
