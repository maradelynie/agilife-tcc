import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import Header from './components/header';
import './styles/global.css';

import {Provider} from "react-redux";
import Store from "./redux/storage";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter >
        <Header login={true}/>
        <div className="page_content">
          <Routes/> 
        </div>
      
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
 
  document.getElementById('root')
);
serviceWorker.register();
