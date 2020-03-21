import React from "react";
import "./App.scss";
import './components/ScreenSizing.css';
import { BrowserRouter, Route } from "react-router-dom"
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar.jsx";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route render={() =>
                        <ProfileContainer
                            // store={props.store} 
                            />}
                        path='/profile/:userId?'
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
                    <Route render={() =>
                        <Login
                            />}
                        path='/login'
                    />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;