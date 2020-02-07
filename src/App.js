import React from "react";
import logo from "./logo.svg";
import "./App.css";
import './components/ScreenSizing.css'
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";


const App = () => {
    return ( <
        div className = "app-wrapper" >
        <
        Header / >
        <
        Navbar / >
        <
        Profile / >
        <
        /div>
    );
};

export default App;