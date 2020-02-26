import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import {createStore, combineReducers } from 'redux';
let reducers = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogsReducer,
});

let store = createStore(reducers);

export default store;