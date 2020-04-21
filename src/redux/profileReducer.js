import { profileAPI } from '../api/api'
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    posts: [
        { message: "Hello!", likeCount: 20 },
        { message: "Welcome to my page!", likeCount: 15 },
        { message: "REEEEEEEEEEEEEEEEE", likeCount: 1 },
        { message: "one more ", likeCount: 100 },
    ],
    newPostText: '',
    profile: null,
    status: '',
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            if (action.newPostText.trim() !== '') {
                let newPost = {
                    id: 5,
                    message: action.newPostText,
                    likeCount: 0
                }
                return {
                    ...state,
                    posts: [newPost, ...state.posts],
                    newPostText: ''
                }
                //before refactoring
                //stateCopy.posts = [...state.posts];
                //stateCopy.posts.unshift(newPost);
                //stateCopy.newPostText = '';

                //return stateCopy;
            } else {
                return state;
            }
        }

        case SET_USER_PROFILE: {
            return { ...state,
            profile: action.profile }
        }

        case SET_STATUS: {
            return { ...state,
            status: action.status }
        }
        
        default:
            return state;
    }
}

export const addPostActionCreator = (postMessage) => ({ type: ADD_POST, newPostText:postMessage })

export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile})

export const setStatus = (status) => ({type:SET_STATUS, status})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
    }
} 

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if(response.data.resultCode === 0){
            dispatch(setStatus(status));
        }
        });
    }
}

export default profileReducer;