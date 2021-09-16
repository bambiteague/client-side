import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(rootReducer, applyMiddleware(thunk));
//  ' window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()'  
// ^ add as arguement, to access the DevTools - (createStore only accepts two args)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
