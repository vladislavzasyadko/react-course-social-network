import React from "react";
import mpmodule from './MyPosts.module.css';
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";

const MyPosts = (props) => {

  let postElements = props.posts
    .map(post => <Post message={post.message} likeCount={post.likeCount} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }


  return (
    <div>
      <h3>My posts</h3>
      <div>New post</div>
      <div>
        <textarea className={mpmodule.input_text}
          ref={newPostElement}
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
