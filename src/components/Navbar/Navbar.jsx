import React from "react";
import nmodule from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={nmodule.nav}>
      <div className={nmodule.content}>
      <NavLink className={nmodule.links} to='/profile' >Profile</NavLink>
      </div>
      
      <div className={nmodule.content}>
        <NavLink className={nmodule.links} to='/dialogs'>Dialogs</NavLink>
      </div>
      <div className={nmodule.content}>
        <NavLink className={nmodule.links} to='/chats'>Chats</NavLink>
      </div>
      <div className={nmodule.content}>
        <NavLink className={nmodule.links} to='/friends'>Friends</NavLink>
      </div>
      <div className={nmodule.content}>
        <NavLink className={nmodule.links} to='/settings'>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
