import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './pages/Home';
import About from './pages/About';
import OnlineAuth from './pages/OnlineAuth';
import Glamyblog from './pages/glamyai';
import Login from './pages/login';
import Signup from './pages/signup';

const App = () => {
  return (
    <Router>
      <main className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<><Header /><Home /><Footer /></>} />
          <Route path="/about" element={<><Header /><About /><Footer /></>} />
          <Route path="/OnlineAuth" element={<><Header /><OnlineAuth /><Footer /></>} />
          <Route path="/glamy-blog" element={<><Header /><Glamyblog /><Footer /></>} />
          <Route path="/login" element={<><Header /><Login /><Footer /></>} />
          <Route path="/signup" element={<><Header /><Signup /><Footer /></>} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
