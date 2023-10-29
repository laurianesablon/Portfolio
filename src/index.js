import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/dist/layout.css';
import './styles/dist/index.css';
import './styles/dist/banner.css';



const root = ReactDOM.createRoot(
  document.getElementById('root') 
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
