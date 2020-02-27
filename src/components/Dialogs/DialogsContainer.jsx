import React from "react";
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsData;

  let onSendMessage = () => {
    props.store.dispatch(sendMessageCreator());
  }

  let onNewMessageChange = (message) => {
    props.store.dispatch(updateNewMessageBodyCreator(message));
  }

  return <Dialogs onSendMessage={onSendMessage} 
  updateNewMessageBody={onNewMessageChange}
  dialogState={state}
  />
};

export default DialogsContainer;
