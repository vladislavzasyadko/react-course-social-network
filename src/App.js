import React from "react";
import "./App.css";
import './components/ScreenSizing.css';
import { BrowserRouter, Route } from "react-router-dom"
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


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
                            store={props.store} />}
                        path='/dialogs'
                    />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;