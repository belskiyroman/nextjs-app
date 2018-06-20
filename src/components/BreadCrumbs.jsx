import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BreadCrumbs extends Component {

  render() {
    return (
      <div>{
        this.props.items.map(item => (
          <React.Fragment>
            <span className='in-blue-500'>{'<'}</span>
            <a href={item.link} className='in-blue-500'>{item.title}</a>
          </React.Fragment>
        ))
      }</div>
    );
  }
}

BreadCrumbs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
};

export default BreadCrumbs
