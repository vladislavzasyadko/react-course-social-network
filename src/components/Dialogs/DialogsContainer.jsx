import React from "react";
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../store-context";


const DialogsContainer = (props) => {
  

  return (<StoreContext.Consumer>
    {
      (store) => {
      let state = store.getState().dialogsData;

      let onSendMessage = () => {
        store.dispatch(sendMessageCreator());
      }
    
      let onNewMessageChange = (message) => {
        store.dispatch(updateNewMessageBodyCreator(message));
      }
      

        return <Dialogs onSendMessage={onSendMessage} 
        updateNewMessageBody={onNewMessageChange}
        dialogState={state}
        />
      }
    }
  </StoreContext.Consumer>)
  
};

export default DialogsContainer;
