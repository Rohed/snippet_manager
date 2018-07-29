import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import callbackHandle from "./components/callbackHandle";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import configureStore from "./store/configureStore";

const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router path="/" history={history}>
      <div>
        <Route path="/" component={App} />
      </div>
    </Router>
  </Provider>,

  document.getElementById("root")
);
registerServiceWorker();
