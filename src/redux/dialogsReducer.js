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
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            if (action.newMessageBody.trim() !== '') {
                let newMessage = {
                    id: 5,
                    message: action.newMessageBody,
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

export const sendMessageCreator = (message) => ({ type: SEND_MESSAGE, newMessageBody: message })

export default dialogsReducer;