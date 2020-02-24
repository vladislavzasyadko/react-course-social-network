import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updatePostText } from './redux/state.js';


export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App appState={state}
        addPost={addPost}
        updatePostText={updatePostText} />, document.getElementById('root'));
}