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
                { id: 3, message: 'hella fuego', },
            ],
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
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
    _updatePostText(newText) {
        this._state.profileData.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) {
        if(action.type === 'ADD-POST'){
            this._addPost();
        }else if(action.type === 'UPDATE-NEW-POST-TEXT') {
            this._updatePostText(action.newText);
        }
    }
    
} 
window.store = store; 

export default store