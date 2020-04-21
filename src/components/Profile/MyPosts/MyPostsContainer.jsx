import { addPostActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

// const MyPostsContainer = (props) => {
//   return (<StoreContext.Consumer>
//     { (store) => {
//       console.log(store);
//        let state = store.getState();

//        let addPost = () => {
//          store.dispatch(addPostActionCreator());
//        };
     
//        let onPostChange = (text) => {
//          let action = updateNewPostTextActionCreator(text);
//          store.dispatch(action);
//        };
//       return <MyPosts
//         updateNewPostText={onPostChange}
//         addPost={addPost}
//         posts={state.profileData.posts}
//         newPostText={state.profileData.newPostText}
//          />
//     }
//     }
//      </StoreContext.Consumer>)
// };

let mapStateToProps = (state) => {
  return {
    posts: state.profileData.posts,
    newPostText:state.profileData.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (postMessage) => {
      dispatch(addPostActionCreator(postMessage));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
