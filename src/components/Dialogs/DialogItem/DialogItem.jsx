import React from "react";
import dmodule from './DialogItem.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`
  return (
    <div className={dmodule.dialogItem}>
          <NavLink activeClassName={dmodule.activeLink} to={path}> {props.name} </NavLink>
        </div>
  );
}


export default DialogItem;
