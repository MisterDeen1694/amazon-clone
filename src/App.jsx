import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <Routes>
                    <Route path="*" element={[<Home />]} />
                    <Route path="/checkout" element={[<Checkout />]} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
