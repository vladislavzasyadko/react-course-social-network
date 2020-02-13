import React from "react";
import "./App.css";
import './components/ScreenSizing.css';
import { BrowserRouter, Route } from "react-router-dom"
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";


const App = (props) => {
    return ( 
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route component={Profile} path='/profile' />
                    <Route component={Dialogs} path='/dialogs' />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;