import React from 'react';
import './ProfileInfo.css';

const ProfileInfo = ({ label, value }) => {
  return (
    <div className="profile-info">
      <span className="label">{label}</span>
      <span className="value">{value}</span>
    </div>
  );
};

export default ProfileInfo;
