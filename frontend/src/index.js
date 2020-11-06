import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

import './styles/global.css';

import {Provider} from "react-redux";
import Store from "./redux/storage";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Routes/> 
    </Provider>
  </React.StrictMode>,
 
  document.getElementById('root')
);
serviceWorker.register();
