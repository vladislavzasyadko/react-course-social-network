const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const dialogsReducer = (state, action) => {
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