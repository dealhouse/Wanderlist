import logo from './logo.svg';
import React from 'react'
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Home from './pages/Home'
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import About from './pages/About'
import MyNotes from './pages/MyNotes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mynotes" element={<MyNotes />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
