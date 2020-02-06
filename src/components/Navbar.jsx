import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="app-nav">
      <div className="nav-content">
        <a className='nav-links'>Profile</a>
      </div>
      <div className="nav-content">
        <a className='nav-links'>Messages</a>
      </div>
      <div className="nav-content">
        <a className='nav-links'>Chats</a>
      </div>
      <div className="nav-content">
        <a className='nav-links'>Friends</a>
      </div>
      <div className="nav-content">
        <a className='nav-links'>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
