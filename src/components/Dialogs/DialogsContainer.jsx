import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";


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
    updateNewMessageBody: (message) => {
      dispatch(updateNewMessageBodyCreator(message));
    },
    onSendMessage: ()=> {
      dispatch(sendMessageCreator());
    }
  }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);


export default DialogsContainer;
