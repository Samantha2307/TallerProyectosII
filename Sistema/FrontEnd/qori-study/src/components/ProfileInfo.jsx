import React from 'react';
import './ProfileInfo.css';

const ProfileInfo = ({ label, value, iconSrc1, iconSrc2, iconSrc3 }) => {
  return (
    <div className="profile-info">
      {iconSrc1 && <img className="icon1" src={iconSrc1} alt="Icon1" />}
      {iconSrc2 && <img className="icon2" src={iconSrc2} alt="Icon2" />}
      {iconSrc3 && <img className="icon3" src={iconSrc3} alt="Icon3" />}

      <span className="label">{label}</span>
      <span className="value">{value}</span>
    </div>
  );
};

export default ProfileInfo;