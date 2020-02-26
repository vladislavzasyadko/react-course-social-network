import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profileData:{
            posts:[
                { message: "Hello!", likeCount: 20 },
                { message: "Welcome to my page!", likeCount: 15 },
                { message: "REEEEEEEEEEEEEEEEE", likeCount: 1 },
                { message: "one more ", likeCount: 100 },
            ],
            newPostText:'sample data',
        },
        dialogsData:{
            dialogs:[
                { id: 1, name: 'User 1', },
                { id: 2, name: 'User 2', },
                { id: 3, name: 'User 3', },
                { id: 4, name: 'User 4', },
            ],
            messages:[
                { id: 1, message: 'Hello', },
                { id: 2, message: 'MAAAAAN', },
                { id: 3, message: 'Waduuuup', },
                { id: 4, message: 'hella fuego', },
            ],
            newMessageBody: "",
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {//later will be rerendering tree method
        console.log("State changed");
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },
    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profileData.newPostText,
            likeCount: 0
        }
        if(newPost.message.trim() !== ''){
            this._state.profileData.posts.unshift(newPost);
            this._state.profileData.newPostText ='';
        }
        this._callSubscriber(this._state);
    },
    _sendMessage() {
        let newMessage = {
            id: 5,
            message: this._state.dialogsData.newMessageBody,
        }
        if(newMessage.message.trim() !== ''){
            this._state.dialogsData.messages.push(newMessage);
            this._state.dialogsData.newMessageBody ='';
        }
        this._callSubscriber(this._state);
    },
    _updatePostText(newText) {
        this._state.profileData.newPostText = newText;
        this._callSubscriber(this._state);
    },
    _updateMessageBody(messageBody){
        this._state.dialogsData.newMessageBody = messageBody;
        this._callSubscriber(this._state);
    },
    dispatch(action) {
        
        this._state.profileData = profileReducer(this._state.profileData, action);
        this._state.dialogsData = dialogsReducer(this._state.dialogsData, action);

        this._callSubscriber(this._state);
    }
    
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
})




window.store = store; 

export default store