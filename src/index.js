import React from 'react';
import ReactDOM from 'react-dom/client';

// Css File
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/font-awesome.min.css"
import "./css/commonform.css"
import "./css/style.css"

// Design File
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
