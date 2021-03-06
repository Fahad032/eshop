import React from 'react';
import ReactDOM from 'react-dom';

// semantic.min.css offline version
import 'semantic-ui-css/semantic.min.css';
// custom css
import './css/admin/style.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
