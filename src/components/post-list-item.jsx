import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styles from '../styles/post-list-item.module.css';

export default function PostListItem({ link, title, excerpt }) {
  return (
    <div className={styles.container}>
      <Link
        className={styles.link}
        to={link}
      >
        <h2 className={styles.title}>
          {title}
        </h2>
        <p className={styles.excerpt}>
          {excerpt}
        </p>
      </Link>
    </div>
  );
}

PostListItem.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};
