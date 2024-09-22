import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Icam from './pages/Style/carduri/Icam.tsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Icam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;