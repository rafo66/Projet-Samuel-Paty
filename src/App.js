import React from 'react';
//bibliothèques :
import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages :
import Home from './pages/home/Home';
import Interviews from './pages/interviews/Interviews';
import MiniJeux from './pages/minijeux/MiniJeux';
import Credits from './pages/credits/Credits';
import Other from './pages/other/Other';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Projet-Samuel-Paty" element={<Home />} />
        <Route path="/Projet-Samuel-Paty/interviews" element={<Interviews />} />
        <Route path="/Projet-Samuel-Paty/mini-jeux" element={<MiniJeux />} />
        <Route path="/Projet-Samuel-Paty/credits" element={<Credits />} />
        {/* path="*" fonctionne si l'url ne correspond à rien de déclaré au dessus*/}
        <Route path="*" element={<Other />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;