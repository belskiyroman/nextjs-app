import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserProfile from "./UserProfile";

class GroupUserProfile extends Component {

  render() {
    return (
      <div className='group-user-profile'>
        {this.props.users.map((userPhoto, index) => <UserProfile userPhoto={userPhoto} key={userPhoto + index} />)}
      </div>
    );
  }
}

GroupUserProfile.propTypes = {
  users: PropTypes.arrayOf(PropTypes.string),
};

export default GroupUserProfile
