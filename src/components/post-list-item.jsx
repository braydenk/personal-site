import React from 'react';
import PropTypes from 'prop-types';

export default function PostListItem({ title }) {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
}

PostListItem.propTypes = {
  title: PropTypes.string.isRequired,
};
