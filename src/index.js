import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from "./app/store"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


ReactDOM.render(
  <Provider store={store}>
    <Router>
    <App/>
    </Router>,
  </Provider>, document.getElementById('root')
);
reportWebVitals();
