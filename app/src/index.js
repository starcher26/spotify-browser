import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import reducers from "./reducers";
import App from "./App";
// import bootstrap 4
import 'bootstrap/dist/css/bootstrap.css'

//create the redux store and enable redux thunk
const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

// provide redux store to child components
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
