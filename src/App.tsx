import React from 'react';
import './assets/styles/App.css';
import Home from './pages/home/Main';
import { Route, Routes } from "react-router-dom";
import Me from './pages/me';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/me" element={<Me/>}>
        </Route>
        <Route path="/home" element={<Home/>}>
        </Route>
        <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
        ></Route>
      </Routes>
  );
}

export default App;

