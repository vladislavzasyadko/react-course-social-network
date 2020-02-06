import React from "react";
import './Profile.css';

import emojiLove from '../img/love.webp';

const Profile = () => {
  return (
    <div className="app-content">
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
