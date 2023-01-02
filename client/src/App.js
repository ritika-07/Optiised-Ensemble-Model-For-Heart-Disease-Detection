import React from 'react';
import "antd/dist/antd.css";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import EDA from './Components/EDA.js';
import Predict from './Components/Predict.js';
import Analyse from './Components/Analyse.js';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Predict/>} />
                <Route path="/eda" element={<EDA/>} />
                <Route path="/analyse" element={<Analyse/>} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
