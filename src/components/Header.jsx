import React from 'react';
import hmodule from "./Header.module.css";
import emojiImage from '../img/cursedleft.png';

const Header = () => {
  return (
    <header className={hmodule.content}>
      <img
        className={hmodule.image}
        src = {emojiImage}
        sec="http://cuturl.herokuapp.com/a6be19d2"
        height="90"
        width="90"
      />
    </header>
  );
};

export default Header;
