import React from 'react';
import './assets/styles/App.css';
import Home from './pages/home/index';
import { Route, Routes } from "react-router-dom";
import Me from './pages/me';

function Page404() {
  return (
      <main style={{ padding: "1rem", textAlign: "center" }}>
        <h1 style={{ color: "orange" }}>404</h1>
        <p>There's nothing here!</p>
      </main>
  )
}

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/me" element={<Me/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
  );
}

export default App;

