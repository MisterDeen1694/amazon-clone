import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Header from './Header';

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={[<Header />, <Home />]} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
