const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { message: "Hello!", likeCount: 20 },
        { message: "Welcome to my page!", likeCount: 15 },
        { message: "REEEEEEEEEEEEEEEEE", likeCount: 1 },
        { message: "one more ", likeCount: 100 },
    ],
    newPostText: '',
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            if (state.newPostText.trim() !== '') {
                let newPost = {
                    id: 5,
                    message: state.newPostText,
                    likeCount: 0
                }
                return {
                    ...state,
                    posts: [newPost, ...state.posts],
                    newPostText: ''
                }
                //stateCopy.posts = [...state.posts];
                //stateCopy.posts.unshift(newPost);
                //stateCopy.newPostText = '';

                //return stateCopy;
            } else {
                return state;
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = { ...state };
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
})

export default profileReducer;