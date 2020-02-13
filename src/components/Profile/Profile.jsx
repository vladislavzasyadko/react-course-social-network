import React from "react";
import pmodule from './Profile.module.css';

import emojiLove from '../../img/love.webp';
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
  return (
    <div>
      <div> avatar + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
