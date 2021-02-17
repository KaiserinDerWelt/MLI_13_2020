import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

//import pages here    
import Home from './components/home/Home'; 
import Signin from './components/signin/Signin';
import User from './components/user/User';
import Transactionaccordion from './components/functionalities/Transactionaccordion';
import Transactionsaving from './components/functionalities/Transactionsaving';
import Transactioncreditcard from './components/functionalities/Transactioncreditcard'


ReactDOM.render(
	<Provider store={store}>
  <Router>
	    <div>
	    	<Switch>
		        {/* Pages*/}
		        <Route exact path='/' component={Home} />
				<Route path='/login' component={Signin} />
				<Route path='/profile' component={User} />
				<Route path='/extract' component={Transactionaccordion} />
				<Route path='/extract-savings' component={Transactionsaving} />
				<Route path='/extract-credit-card' component={Transactioncreditcard} />
	      	</Switch>
	    </div>
    </Router>
	</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//
//<Route component={Error} />
