import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/reservaweather" element={<Search/>}/>
            </Routes>
        </Router>

    );
}

export default App;