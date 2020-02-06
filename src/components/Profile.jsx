import React from "react";
import pmodule from './Profile.module.css';

import emojiLove from '../img/love.webp';

const Profile = () => {
  return (
    <div className={pmodule.content}>
      <img
        src={emojiLove}
        height="90"
        width="90"
      />
      <div> avatar + description</div>
      <div>
        My posts
        <div>New post</div>
        <div>Post</div>
      </div>
    </div>
  );
};

export default Profile;
