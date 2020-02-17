import React from "react";
import mpmodule from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    { message: "Hello!", likeCount: 20 },
    { message: "Welcome to my page!", likeCount: 15 },
    { message: "REEEEEEEEEEEEEEEEE", likeCount: 1 },
  ]

  let postElements = posts
    .map(post => <Post message={post.message} likeCount={post.likeCount} />)

  return (
    <div>
      <h3>My posts</h3>
      <div>New post</div>
      <div>
        <textarea placeholder='Let me tell u about...'></textarea>
        <div>
          <button>post it!</button>
        </div>
      </div>
      <div>
        {postElements}
      </div>
    </div>
  );
};

export default MyPosts;
