import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import './index.css';
import Layout from './components/Layout';
import Development from './pages/Development';
import Project from './pages/Project';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="project/:slug" element={<Project />} />
      </Route>
      <Route path="*" element={<Development />} />
    </Routes>
  );
}

export default App;
