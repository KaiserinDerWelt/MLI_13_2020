import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap';
import axios from "axios";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";

import rootReducer from "./redux/reducers/rootReducer";

// Change the APIs server base url from here
axios.defaults.baseURL = "http://localhost:3001/api/v1";

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

