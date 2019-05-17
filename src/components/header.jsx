import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: '#f9f9f9',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <ul style={{
        listStyle: 'none',
      }}
      >
        <li style={{ display: 'inline', paddingRight: '1.0em' }}>Blog</li>
        <li style={{ display: 'inline', paddingRight: '1.0em' }}>Projects</li>
        <li style={{ display: 'inline', paddingRight: '1.0em' }}>About</li>
      </ul>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
