import React from 'react';
import './assets/css/App.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Characters from './pages/Characters';
import Locations from './pages/Locations';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='timeline' element={<Timeline />} />
        <Route path='characters' element={<Characters />} />
        <Route path='locations' element={<Locations />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
