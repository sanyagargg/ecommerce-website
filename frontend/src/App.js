import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/index';
import About from './pages/about';
import Products from './pages/products';

// Product detail pages
import FerriteTransformer from './pages/products/ferritetransformer';
import LineFilter from './pages/products/linefilter';
import DrumCoils from './pages/products/drumcoils';
import Toroidal from './pages/products/toroidal';
import BitRodCoil from './pages/products/bitrodcoil';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />

        {/* Product detail routes */}
        <Route path="/products/ferritetransformer" element={<FerriteTransformer />} />
        <Route path="/products/linefilter" element={<LineFilter />} />
        <Route path="/products/drumcoils" element={<DrumCoils />} />
        <Route path="/products/toroidal" element={<Toroidal />} />
        <Route path="/products/bitrodcoil" element={<BitRodCoil />} />
      </Routes>
    </Router>
  );
}

export default App;