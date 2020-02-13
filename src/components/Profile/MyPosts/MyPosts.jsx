import React from "react";
import mpmodule from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  return (
      <div>
        My posts
        <div>New post</div>
        <div>
          <Post message='Hello!' likeCount={20} />
          {/* <Post message='Welcome to my page!' likeCount={15} /> */}
        </div>
      </div>
  );
};

export default MyPosts;
