import React from 'react';
import "./Header.css";
import emojiImage from '../img/cursedleft.png';

const Header = () => {
  return (
    <header className="app-header">
      <img
        className="header-image"
        src = {emojiImage}
        sec="http://cuturl.herokuapp.com/a6be19d2"
        height="90"
        width="90"
      />
    </header>
  );
};

export default Header;
