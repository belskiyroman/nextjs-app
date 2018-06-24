import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class StatusMarker extends Component {
  static status = {
    Fired: { title: 'Fired', colorClass: 'in-black' },
    Accepted: { title: 'Accepted', colorClass: 'in-blue-500' },
    Interns: { title: 'Interns', colorClass: 'in-blue-700' },
    Interview: { title: 'Interview', colorClass: 'in-magenta-300' },
    New: { title: 'New', colorClass: 'in-green-500' },
    NotHire : { title: 'Not Hire', colorClass: 'in-red-500' },
    Reserve: { title: 'Reserve', colorClass: 'in-yellow-400' },
    Hire: { title: 'Hire', colorClass: 'in-magenta-500' },
    Test: { title: 'Test', colorClass: 'in-blue-300' },
  };

  render() {
    return (
      <div className={classNames('label-tag', this.props.status)}>{this.props.tag}</div>
    );
  }
}

StatusMarker.propTypes = {
  tag: PropTypes.string,
  status: PropTypes.string,
};

export default StatusMarker
