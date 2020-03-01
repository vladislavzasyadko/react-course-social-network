import React from "react";
import "./App.scss";
import './components/ScreenSizing.css';
import { BrowserRouter, Route } from "react-router-dom"
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route render={() =>
                        <Profile
                            // store={props.store} 
                            />}
                        path='/profile'
                    />
                    <Route render={() =>
                        <DialogsContainer
                            // store={props.store} 
                            />}
                        path='/dialogs'
                    />
                    <Route render={() =>
                        <UsersContainer
                            />}
                        path='/users'
                    />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;