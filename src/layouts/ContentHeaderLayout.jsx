import React from 'react';
import PropTypes from 'prop-types';

const ContentHeaderLayout = ({ children }) => <div className="content-header">{children}</div>;

ContentHeaderLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ContentHeaderLayout;
