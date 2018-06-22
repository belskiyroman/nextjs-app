import React from 'react';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => <main className="container">{children}</main>;

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainLayout;
