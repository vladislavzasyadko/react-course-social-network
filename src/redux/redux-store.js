import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import {createStore, combineReducers } from 'redux';
import usersReducer from "./usersReducer";
let reducers = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogsReducer,
    usersData: usersReducer,
});

let store = createStore(reducers);

export default store;