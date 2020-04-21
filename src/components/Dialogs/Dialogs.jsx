import React from "react";
import DialogItem from './DialogItem/DialogItem'
import dmodule from './Dialogs.module.css';
import Message from "./Message/Message";
import { reduxForm, Field } from 'redux-form'

const Dialogs = (props) => {
  let dialogsElements = props.dialogState.dialogs
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

  let messageElements = props.dialogState.messages
    .map(message => <Message message={message.message} />)

  let addNewMessage = (values) => {
    props.onSendMessage(values.newMessageBody);
  }

  return (
    <div className={dmodule.dialogs}>
      <div className={dmodule.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={dmodule.messagesItems}>
        <div>{messageElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>

    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component='textarea' name='newMessageBody' placeholder='Enter your message...' />
      </div>
      <div><button>Send</button></div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;
