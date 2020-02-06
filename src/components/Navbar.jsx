import React from "react";
import nmodule from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={nmodule.nav}>
      <div className={nmodule.content}>
        <a className={nmodule.links}>Profile</a>
      </div>
      <div className={nmodule.content}>
        <a className={nmodule.links}>Messages</a>
      </div>
      <div className={nmodule.content}>
        <a className={nmodule.links}>Chats</a>
      </div>
      <div className={nmodule.content}>
        <a className={nmodule.links}>Friends</a>
      </div>
      <div className={nmodule.content}>
        <a className={nmodule.links}>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
