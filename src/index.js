import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/dist/animation.css';
import './styles/dist/index.css';
import './styles/dist/header.css';
import './styles/dist/aboutMe.css';




const root = ReactDOM.createRoot(
  document.getElementById('root') 
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
