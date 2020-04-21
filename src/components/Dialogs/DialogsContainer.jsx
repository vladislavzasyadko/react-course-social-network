import { sendMessageCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";


// const DialogsContainer = (props) => {
  

//   return (<StoreContext.Consumer>
//     {
//       (store) => {
//       let state = store.getState().dialogsData;

//       let onSendMessage = () => {
//         store.dispatch(sendMessageCreator());
//       }
    
//       let onNewMessageChange = (message) => {
//         store.dispatch(updateNewMessageBodyCreator(message));
//       }
      

//         return <Dialogs onSendMessage={onSendMessage} 
//         updateNewMessageBody={onNewMessageChange}
//         dialogState={state}
//         />
//       }
//     }
//   </StoreContext.Consumer>)
  
// };


let mapStateToProps = (state) => {
  return {
    dialogState: state.dialogsData
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onSendMessage: (message)=> {
      dispatch(sendMessageCreator(message));
    }
  }
}

// let AuthRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);


// export default DialogsContainer;

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
