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
    <div className={styles.logo}>
      <Link
        className={styles.logoLink}
        to="/"
      >
        <img
          className={styles.logoImage}
          src={logo}
          alt="logo"
          width="40px"
          height="40px"
        />
      </Link>
    </div>

    <div className={styles.mainNavContainer}>
      <nav className={styles.mainNav}>
        <ul className={styles.mainNavMenu}>
          {links.map(link => (
            <li
              key={link.id}
              className={styles.menuItem}
            >
              <Link
                to={link.route}
                className={styles.menuItemLink}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
