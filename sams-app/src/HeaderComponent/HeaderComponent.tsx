import React from 'react';
import LogoSvg from '../assets/logo.svg';
import ToTopSvg from '../assets/menu-dash.svg';
import ProfileSvg from '../assets/profile.svg';
import './HeaderComponent.scss';

// Stateless, Therefore using a functional component for simplicity
function HeaderComponent() {
  return (
    <div className="header">
        <img className="logo-icon" src={LogoSvg} alt={''}/>
        <div className="profile-menu-container">
          <img className="menu-icon" src={ToTopSvg} alt={''}/>
          <img className="profile-icon" src={ProfileSvg} alt={''}/>
        </div>
    </div>
  );
}

export default HeaderComponent;
