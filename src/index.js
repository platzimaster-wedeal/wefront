import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/App";
import reducer from "./reducers/index";

// Global state
const initialState = {
 user: {
  hola: "mundo",
 },
};
const store = createStore(reducer, initialState);

// Render del componente principal al HTML
ReactDOM.render(
 <Provider store={store}>
  <App />
 </Provider>,
 document.getElementById("App")
);
