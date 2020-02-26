const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts:[
        { message: "Hello!", likeCount: 20 },
        { message: "Welcome to my page!", likeCount: 15 },
        { message: "REEEEEEEEEEEEEEEEE", likeCount: 1 },
        { message: "one more ", likeCount: 100 },
    ],
    newPostText:'sample data',
}
const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            }
            if(newPost.message.trim() !== ''){
                state.posts.unshift(newPost);
                state.newPostText ='';
            }
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
})

export default profileReducer;