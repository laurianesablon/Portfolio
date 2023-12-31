import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/dist/animation.css';
import './styles/dist/index.css';
import './styles/dist/banner.css';
import './styles/dist/aboutMe.css';
import './styles/dist/projects.css';
import './styles/dist/contact.css';
import './styles/dist/footer.css';




const root = ReactDOM.createRoot(
  document.getElementById('root') 
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
