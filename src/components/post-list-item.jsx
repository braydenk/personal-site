import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/post-list-item.module.css';

export default function PostListItem({ title, excerpt }) {
  return (
    <div className={styles.postItemContainer}>
      <h1 className={styles.postItemTitle}>
        {title}
      </h1>
      <p className={styles.postItemExcerpt}>{excerpt}</p>
      <a className={styles.postItemButton} href="/">
        Read More
      </a>
    </div>
  );
}

PostListItem.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};
