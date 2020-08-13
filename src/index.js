import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppContainer from './components/App';
import reducers from './reducers';
import { css } from 'emotion';

import rootReducer from "./reducers";


const bodyStyle = css`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');
  font-family: 'Source Sans Pro', sans-serif;
`
document.getElementById("root").classList.add(bodyStyle)

//const store = createStore(reducers, applyMiddleware(thunk));

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

console.log('store', store);
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);