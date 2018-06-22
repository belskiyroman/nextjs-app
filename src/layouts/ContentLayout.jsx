import React from 'react';
import PropTypes from 'prop-types';

const ContentLayout = ({ children }) => <div className="content flex-grow-1 m-b-40">{children}</div>;

ContentLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ContentLayout;
