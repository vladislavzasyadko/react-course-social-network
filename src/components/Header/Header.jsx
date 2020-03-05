import React from 'react';
import hmodule from "./Header.module.scss";
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className={hmodule.content}>
      <div className={hmodule.burger}>
        <div className={hmodule.line1}></div>
        <div className={hmodule.line2}></div>
        <div className={hmodule.line3}></div>
      </div>
      <div className={hmodule.logo}>
        Social Web
      </div>

      <div className={hmodule.loginBlock}>
        {props.isAuth ? props.login :
          <NavLink className={hmodule.loginLink} to={'/login'} >Login</NavLink>
        }
      </div>

    </div>
  );
};

export default Header;
