import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
