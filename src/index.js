import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import AllReducers from './reducers/indes'
//import {createStore} from 'redux';
import {Provider} from 'react-redux';
import store from "./app/store"

/*const store = createStore(AllReducers ,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(<Provider store={store}><App /></Provider>   , document.getElementById('root'));*/

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root')
);
reportWebVitals();
