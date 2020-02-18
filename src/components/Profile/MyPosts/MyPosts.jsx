import React from "react";
import mpmodule from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postElements = props.posts
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
