import React from "react";
import ReactDOM from "react-dom";
import "../public/index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

import todos from "./Reducers/Todos";

const todosStore = createStore(todos);

ReactDOM.render(
  <Provider store={todosStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
