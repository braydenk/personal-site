import { Link } from 'gatsby';
import React from 'react';

import styles from '../styles/header.module.css';

const siteTitle = 'Brayden Killeen';
const links = [
  { id: 0, route: '/', title: 'Home' },
  { id: 1, route: '/projects/', title: 'Projects' },
  { id: 2, route: '/about/', title: 'About' },
];

const Header = () => (
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
        {links.map(link => (
          <li key={link.id} className={styles.headerMenuItem}>
            <Link
              to={link.route}
              className={styles.headerLink}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </header>
);

export default Header;
