import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import styles from '../styles/layout.module.css';

export default function Layout({ title, children }) {
  return (
    <div className={styles.layoutContainer}>
      <Header siteTitle={title} />
      {children}
    </div>
  );
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ])).isRequired,
};
