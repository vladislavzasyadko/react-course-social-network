import React from "react";
import mpmodule from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postElements = props.posts
    .map(post => <Post message={post.message} likeCount={post.likeCount} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updatePostText(text);

  }


  return (
    <div>
      <h3>My posts</h3>
      <div>New post</div>
      <div>
        <textarea ref={newPostElement}
          placeholder='Let me tell u about...'
          value={props.newPostText}
          onChange={onPostChange}>

        </textarea>
        <div>
          <button onClick={addPost}>post it!</button>
        </div>
      </div>
      <div>
        {postElements}
      </div>
    </div>
  );
};

export default MyPosts;
