import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import router from './router.jsx';
import './assets/fonts/Font.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
