import React from "react";
import logo from "./logo.svg";
import "./App.css";
import './components/ScreenSizing.css'
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Profile from "./components/Profile.jsx";


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
};

export default App;
