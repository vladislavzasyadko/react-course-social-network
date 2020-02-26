import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

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
    dispatch(action) {
        
        this._state.profileData = profileReducer(this._state.profileData, action);
        this._state.dialogsData = dialogsReducer(this._state.dialogsData, action);

        this._callSubscriber(this._state);
    }
    
}

window.store = store; 

export default store