import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class StatusMarker extends Component {

  static status = {
    fired: 'in-black',
    accepted: 'in-blue-500',
    intern: 'in-blue-700',
    interview: 'in-magenta-300',
    new: 'in-green-500',
    notHire: 'in-red-500',
    reserve: 'in-yellow-400',
    hire: 'in-magenta-500',
    test: 'in-blue-300',
  };

  render() {
    return (
      <div className={classNames('label-tag', this.props.status)}>{this.props.tag}</div>
    );
  }
}

StatusMarker.propTypes = {
  tag: PropTypes.string,
  status: PropTypes.oneOf(Object.values(StatusMarker.status)),
};

export default StatusMarker
