import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({ userPhoto, userName }) => (
  <div className="user-profile">
    {userPhoto && <img className="user-profile-avatar" src={userPhoto} alt={userName} />}
    {userName && <span className="user-profile-title">{userName}</span>}
  </div>
);

UserProfile.defaultProps = {
  userPhoto: '',
  userName: '',
};

UserProfile.propTypes = {
  userPhoto: PropTypes.string,
  userName: PropTypes.string,
};

export default UserProfile;
