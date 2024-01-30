import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import Liked from './pages/liked/Liked.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path:'/liked',
    element: <Liked/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);