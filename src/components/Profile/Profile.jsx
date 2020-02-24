import React from "react";
import pmodule from './Profile.module.css';

import emojiLove from '../../img/love.webp';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} 
      newPostText={props.state.newPostText} 
      dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
