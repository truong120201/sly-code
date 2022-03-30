import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'typeface-roboto'


import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    {/* <Router>
      <App />
    </Router> */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
