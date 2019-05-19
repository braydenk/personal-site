import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import styles from '../styles/blog-post.module.css';

export default function BlogPost({ data }) {
  const post = data.markdownRemark;

  return (
    <Layout>
      <div className={styles.titleContainer}>
        <h1 className={styles.postTitle}>
          {post.frontmatter.title}
        </h1>
      </div>
      <div
        className={styles.postContent}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  );
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    html: PropTypes.string,
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
    }),
  }).isRequired,
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
