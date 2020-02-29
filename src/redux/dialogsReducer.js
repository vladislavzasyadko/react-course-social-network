const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    newMessageBody: '',
}

export const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.messageBody;
            return state;
        case SEND_MESSAGE:
        let newMessage = {
            id: 5,
            message: state.newMessageBody,
        }
        if(newMessage.message.trim() !== ''){
            state.messages.push(newMessage);
            state.newMessageBody ='';
        }
        return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (message) => ({
        type: UPDATE_NEW_MESSAGE_BODY,
        messageBody: message,
})

export default dialogsReducer;