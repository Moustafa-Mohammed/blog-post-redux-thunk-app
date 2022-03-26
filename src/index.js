import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./components/app/App";
import reducers from "./reducers";

import "./index.css";

const store = createStore(reducers, applyMiddleware(thunk));
console.log(thunk);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
