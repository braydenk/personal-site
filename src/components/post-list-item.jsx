import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/post-list-item.module.css';

export default function PostListItem({ title }) {
  return (
    <div className={styles.postItemContainer}>
      <h3 className={styles.postItemTitle}>
        {title}
      </h3>
      <a className={styles.postItemButton} href="/">
        Read more...
      </a>
    </div>
  );
}

PostListItem.propTypes = {
  title: PropTypes.string.isRequired,
};
