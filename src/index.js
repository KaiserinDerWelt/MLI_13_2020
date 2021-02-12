import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

//import pages here
import Home from './components/home/Home'; 


ReactDOM.render(
  <Router>
	    <div>
	    	<Switch>
		        {/* Pages*/}
		        <Route exact path='/' component={Home} />
	      	</Switch>
	    </div>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//<Route path='/' component={} />
//<Route component={Error} />