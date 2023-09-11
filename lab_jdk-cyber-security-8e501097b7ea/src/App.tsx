import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import {I18nextProvider} from "react-i18next";
import i18n from "i18next";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Risk from "./pages/Risk/Risk";
import Esa from "./pages/ESA/Esa";
import Framework from "./pages/Framework/Framework";
import Organisation from "./pages/Organisation/Organisation";


function App() {

    return (
        <I18nextProvider i18n={i18n}>

            <Router>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/risk" element={<Risk/>}/>
                    <Route path="/esa" element={<Esa/>}/>
                    <Route path="/my-organisation" element={<Organisation/>}/>
                    <Route path="/framework" element={<Framework/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </Router>

        </I18nextProvider>

    );
}

export default App;
