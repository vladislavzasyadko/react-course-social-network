const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'User 1', },
        { id: 2, name: 'User 2', },
        { id: 3, name: 'User 3', },
        { id: 4, name: 'User 4', },
    ],
    messages: [
        { id: 1, message: 'Hello', },
        { id: 2, message: 'MAAAAAN', },
        { id: 3, message: 'Waduuuup', },
        { id: 4, message: 'hella fuego', },
    ],
    newMessageBody: '',
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {
                ...state,
                newMessageBody: action.messageBody
            };
            return stateCopy;
        }
        case SEND_MESSAGE: {
            if (state.newMessageBody.trim() !== '') {
                let newMessage = {
                    id: 5,
                    message: state.newMessageBody,
                }
                return {
                    ...state,
                    messages: [...state.messages, newMessage],
                    newMessageBody: ''
                }
            } else {
                return state;
            }

        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (message) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    messageBody: message,
})

export default dialogsReducer;