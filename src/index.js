import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Logo from './images/pl.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div className='align-baseline d-flex justify-content-center'>
      <img src={Logo} className='logo' alt='logo'></img>
    </div>
    
  </React.StrictMode>
);
