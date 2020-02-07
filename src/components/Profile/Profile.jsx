import React from "react";
import pmodule from './Profile.module.css';

import emojiLove from '../../img/love.webp';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={pmodule.content}>
      <img
        src={emojiLove}
        height="90"
        width="90"
      />
      <div> avatar + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
