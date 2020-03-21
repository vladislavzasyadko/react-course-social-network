import React from "react";
import DialogItem from './DialogItem/DialogItem'
import dmodule from './Dialogs.module.css';
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {
  let dialogsElements = props.dialogState.dialogs
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

  let messageElements = props.dialogState.messages
    .map(message => <Message message={message.message} />)

  let newMessageBody = props.dialogState.newMessageBody;

  let onSendMessageClick = () => {
    props.onSendMessage();
  }

  let onNewMessageChange = (event) => {
    let messageBody = event.target.value;
    props.updateNewMessageBody(messageBody);
  }

  if(!props.isAuth){
    return <Redirect to={'/login'}/>
  }

  return (
    <div className={dmodule.dialogs}>
      <div className={dmodule.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={dmodule.messagesItems}>
        <div>{messageElements}</div>
        <div>
          <textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
            className={dmodule.input_text}
            placeholder='Enter your message...'>
          </textarea>
        </div>
        <div><button onClick={onSendMessageClick}>Send</button></div>
      </div>
    </div>
  );
};

export default Dialogs;
