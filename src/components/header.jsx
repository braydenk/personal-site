import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import styles from '../styles/header.module.css';

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.headerContentContainer}>
      <h1 className={styles.headerTitle}>
        <Link
          to="/"
          className={styles.headerLink}
        >
          {siteTitle}
        </Link>
      </h1>

      <ul className={styles.headerMenu}>

        <li className={styles.headerMenuItem}>
          <Link
            to="/"
            className={styles.headerLink}
          >
            Home
          </Link>
        </li>
        <li className={styles.headerMenuItem}>
          <Link
            to="/projects/"
            className={styles.headerLink}
          >
            Projects
          </Link>
        </li>
        <li className={styles.headerMenuItem}>
          <Link
            to="/about/"
            className={styles.headerLink}
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: 'Brayden Killeen',
};

export default Header;
