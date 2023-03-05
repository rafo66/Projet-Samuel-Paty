import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/index.scss";
var json = require('./assets/colors/theme-orange.json');

// définition des couleurs de thème clair à partir du fichier .json :
document.documentElement.style.setProperty('--background', json.LightMode[0].background);
document.documentElement.style.setProperty('--headline', json.LightMode[0].headline);
document.documentElement.style.setProperty('--paragraph', json.LightMode[0].paragraph);
document.documentElement.style.setProperty('--button', json.LightMode[0].button);
document.documentElement.style.setProperty('--button-text', json.LightMode[0]['button-text']);
document.documentElement.style.setProperty('--button-text-hover', json.LightMode[0]['button-text-hover']);
document.documentElement.style.setProperty('--stroke', json.LightMode[0].stroke);
document.documentElement.style.setProperty('--main', json.LightMode[0].main);
document.documentElement.style.setProperty('--highlight', json.LightMode[0].highlight);
document.documentElement.style.setProperty('--secondary', json.LightMode[0].secondary);
document.documentElement.style.setProperty('--tertiary', json.LightMode[0].tertiary);

//rendu de la page :
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
