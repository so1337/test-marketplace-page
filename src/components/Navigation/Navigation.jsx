import React from 'react';
import logo from '../../assets/images/logo.svg';

const Navigation = () => (
  <header className="header">
    <nav className="navigation">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <a className="nav-link" href="#">Dashboard</a>
      <a className="nav-link active" href="#">Marketplace</a>
      <a className="nav-link" href="#">Campaigns</a>
      <a className="nav-link" href="#">Messenger</a>
    </nav>
    <div className="profile">
      <img src="/profile.png" alt="profile" />
    </div>
  </header>
);

export default Navigation;
