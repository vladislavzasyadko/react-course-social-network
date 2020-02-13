import React from 'react';
import hmodule from "./Header.module.css";
import emojiImage from '../../img/cursedleft.png';

const Header = () => {
  return (
    <div className={hmodule.content}>
      <div className={hmodule.logo}>
      Social Web
      </div>

    </div>
  );
};

export default Header;
