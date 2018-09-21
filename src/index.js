import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

import landingPageReducer from "./Components/LandingPageReducer";

// import postReducer from "./Configuration/Post/postReducer";

const store = createStore(landingPageReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
