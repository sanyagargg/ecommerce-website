import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/index';
import About from './pages/about';
import Products from './pages/products';

// Product detail pages
import FerriteTransformer from './pages/products/FerriteTransformer/ferritetransformer';
import LineFilter from './pages/products/linefilter';
import DrumCoils from './pages/products/drumcoils';
import Toroidal from './pages/products/toroidal';
import BitRodCoil from './pages/products/bitrodcoil';


//nested pages
import EEseries from './pages/products/FerriteTransformer/eeseries';
import EFDseries from './pages/products/FerriteTransformer/efdseries';
import RMseries from './pages/products/FerriteTransformer/rmseries';
import EPCseries from './pages/products/FerriteTransformer/epcseries';
import ETDseries from './pages/products/FerriteTransformer/etdseries';
import PQseries from './pages/products/FerriteTransformer/pqseries';
import EERseries from './pages/products/FerriteTransformer/eerseries';
import POTseries from './pages/products/FerriteTransformer/potseries';
import ECseries from './pages/products/FerriteTransformer/ecseries';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />

        {/* Product category level */}
        <Route path="/products/ferritetransformer" element={<FerriteTransformer />} />
        <Route path="/products/linefilter" element={<LineFilter />} />
        <Route path="/products/drumcoils" element={<DrumCoils />} />
        <Route path="/products/toroidal" element={<Toroidal />} />
        <Route path="/products/bitrodcoil" element={<BitRodCoil />} />

        {/*nested category */}
        <Route path="/products/ferritetransformer/eeseries" element={<EEseries />} />
        <Route path="/products/ferritetransformer/efdseries" element={<EFDseries />} />
        <Route path="/products/ferritetransformer/rmseries" element={<RMseries />} />
        <Route path="/products/ferritetransformer/etdseries" element={<ETDseries />} />
        <Route path="/products/ferritetransformer/epcseries" element={<EPCseries />} />
        <Route path="/products/ferritetransformer/pqseries" element={<PQseries />} />
        <Route path="/products/ferritetransformer/eerseries" element={<EERseries />} />
        <Route path="/products/ferritetransformer/potseries" element={<POTseries />} />
        <Route path="/products/ferritetransformer/ecseries" element={<ECseries />} />

      </Routes>
    </Router>
  );
}

export default App;