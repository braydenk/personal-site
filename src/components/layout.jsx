import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import './layout.css';

export default function Layout({ title, children }) {
  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
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
