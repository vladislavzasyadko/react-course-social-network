import React from "react";
import mmodule from './Message.module.css';


const Message = (props) => {
  return (
    <div className={mmodule.content}>
      {props.message}
    </div>
  );
};

export default Message;
