import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Importing layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Importing page components
import Home from './pages/Home';
import About from './pages/About';
import OnlineAuth from './pages/OnlineAuth';

const App = () => {
  return (
    <Router>
      <main className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          } />
          <Route path="/OnlineAuth" element={
            <>
              <Header />
              <OnlineAuth />
              <Footer />
            </>
          } />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
