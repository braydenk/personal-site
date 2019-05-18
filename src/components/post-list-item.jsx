import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styles from '../styles/post-list-item.module.css';

export default function PostListItem({ link, title, excerpt }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.postItemTitle}>
        {title}
      </h1>
      <p className={styles.postItemExcerpt}>
        {excerpt}
      </p>
      <Link to={link} className={styles.postItemLink}>
        Read More
      </Link>
    </div>
  );
}

PostListItem.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};
