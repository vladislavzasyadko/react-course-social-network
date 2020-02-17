import React from "react";
import DialogItem from './DialogItem/DialogItem'
import dmodule from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import Message from "./Message/Message";


const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: 'User 1', },
    { id: 2, name: 'User 2', },
    { id: 3, name: 'User 3', },
  ]

  let messagesData = [
    { id: 1, message: 'Hello', },
    { id: 2, message: 'MAAAAAN', },
    { id: 3, message: 'Waduuuup', },
  ]

  let dialogsElements = dialogsData
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

  let messageElements = messagesData
    .map(message => <Message message={message.message} />)

  return (

    <div className={dmodule.dialogs}>
      <div className={dmodule.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={dmodule.messagesItems}>
        {messageElements}
      </div>
    </div>
  );
};

export default Dialogs;
