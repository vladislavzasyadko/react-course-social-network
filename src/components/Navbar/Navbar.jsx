import React from "react";
import nmodule from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={nmodule.nav}>
      <div className={nmodule.content}>
      <NavLink to='/profile' activeClassName={nmodule.activeLink}>Profile</NavLink>
      </div>
      <div className={nmodule.content}>
        <NavLink to='/dialogs' activeClassName={nmodule.activeLink}>Dialogs</NavLink>
      </div>
      <div className={nmodule.content}>
        <NavLink to='/chats' activeClassName={nmodule.activeLink}>Chats</NavLink>
      </div>
      <div className={nmodule.content}>
        <NavLink to='/friends' activeClassName={nmodule.activeLink}>Friends</NavLink>
      </div>
      <div className={nmodule.content}>
        <NavLink to='/settings' activeClassName={nmodule.activeLink}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
