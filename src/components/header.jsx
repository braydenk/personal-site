import { Link } from 'gatsby';
import React from 'react';
import styles from '../styles/header.module.css';
import logo from '../images/logo.png';

const links = [
  { id: 0, route: '/', title: 'Home' },
  { id: 1, route: '/projects/', title: 'Projects' },
  { id: 2, route: '/about/', title: 'About' },
];

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerContentContainer}>
      <Link
        to="/"
      >
        <img className={styles.headerLogo} src={logo} alt="logo" />
      </Link>


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
