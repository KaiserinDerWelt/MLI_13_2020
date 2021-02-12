import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './components/css/main.css';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

//import pages here    src/components/img/
import Home from './components/home/Home'; 
import Signin from './components/signin/Signin';


ReactDOM.render(
  <Router>
	    <div>
	    	<Switch>
		        {/* Pages*/}
		        <Route exact path='/' component={Home} />
				<Route path='/signin' component={Signin} />
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
