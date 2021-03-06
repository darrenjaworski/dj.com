import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "normalize.css";
import "./index.css";

import { unregister } from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
unregister();
