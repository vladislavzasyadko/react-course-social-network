import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../store-context";

const MyPostsContainer = (props) => {
  return (<StoreContext.Consumer>
    { (store) => {
      console.log(store);
       let state = store.getState();

       let addPost = () => {
         store.dispatch(addPostActionCreator());
       };
     
       let onPostChange = (text) => {
         let action = updateNewPostTextActionCreator(text);
         store.dispatch(action);
       };
      return <MyPosts
        updateNewPostText={onPostChange}
        addPost={addPost}
        posts={state.profileData.posts}
        newPostText={state.profileData.newPostText}
         />
    }
    }
     </StoreContext.Consumer>)
};

export default MyPostsContainer;
