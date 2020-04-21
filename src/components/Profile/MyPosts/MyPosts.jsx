import React from "react";
import mpmodule from './MyPosts.module.scss';
import Post from "./Post/Post";
import { reduxForm, Field } from 'redux-form'

const MyPosts = (props) => {
  let postElements = props.posts
    .map(post => <Post message={post.message}
      likeCount={post.likeCount} />)

  let addPost = (value) => {
    props.addPost(value.newPostText)
  }


  return (
    <div>
      <h3>My posts</h3>
      <div>New post</div>
      <AddPostFormRedux onSubmit={addPost}/>
      <div>
        {postElements}
      </div>
    </div>
  );
};

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component='textarea' name='newPostText' placeholder='Let me tell u about...' />
      </div>
      <div><button>Send</button></div>
    </form>
  )
}

const AddPostFormRedux = reduxForm({form:'profileAddPostForm'})(AddPostForm)

export default MyPosts;
