import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import {createStore, combineReducers } from 'redux';
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
let reducers = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogsReducer,
    usersData: usersReducer,
    auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;