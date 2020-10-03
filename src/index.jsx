import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import CombineReducers from "./redux/reducers/CombineReducers";

import "./assets/styles/App.scss";
import App from "./routes/App";


// Redux - Global state
const store = createStore(CombineReducers, {}, applyMiddleware(ReduxThunk));

// Render del componente principal al HTML
ReactDOM.render(
 <Provider store={store}>
  <App />
 </Provider>,
 document.getElementById("App")
);
