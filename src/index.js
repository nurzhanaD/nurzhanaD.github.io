import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Routes, Route} from "react-router-dom";
import App from './App.jsx';
import Liked from './pages/liked/Liked.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/liked' element={<Liked/>}/>
    </Routes>
  </HashRouter>
);