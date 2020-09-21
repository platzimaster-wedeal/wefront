import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/index";

import './assets/styles/app.scss';
import App from "./routes/App";

// Global state
const initialState = {
  "user": {},
};
const store = createStore(reducer, initialState);

// Render del componente principal al HTML
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("App")
);
