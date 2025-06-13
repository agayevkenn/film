import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ViewList from './components/ViewList';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list/:id" element={<ViewList />} />
    </Routes>
  );
}

export default App;