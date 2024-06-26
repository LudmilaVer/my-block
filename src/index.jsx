import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

AOS.init();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);