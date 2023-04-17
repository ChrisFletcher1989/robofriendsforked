//import files needed and other components created
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import 'tachyons';
import reportWebVitals from './reportWebVitals';

//create and manipulate the dom
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
);


reportWebVitals();
