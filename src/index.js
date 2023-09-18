import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/components/App';

import './assets/css/index.css';
import './assets/scss/app.scss';
import './assets/scss/custom-react-bootstrap.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
