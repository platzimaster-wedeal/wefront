import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import reducer from "./reducers/index";
import { createStore } from "redux";

// Global statse
const initialState = {};
const store = createStore(reducer, initialState);

// Render del componente principal al HTML
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("App")
);
