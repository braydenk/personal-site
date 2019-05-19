import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import styles from '../styles/layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ])).isRequired,
};
