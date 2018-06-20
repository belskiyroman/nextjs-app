import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserProfile extends Component {

  render() {
    return (
      <div className='user-profile'>
        {this.props.userPhoto && <img className='user-profile-avatar' src={this.props.userPhoto}  alt={this.props.userName} />}
        {this.props.userName && <span className='user-profile-title'>{this.props.userName}</span>}
      </div>
    );
  }
}

UserProfile.propTypes = {
  userPhoto: PropTypes.string,
  userName: PropTypes.string,
};

export default UserProfile
