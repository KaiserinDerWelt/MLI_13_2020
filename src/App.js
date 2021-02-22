import React from "react";

//import pages here
import Home from "./components/home/Home";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import User from "./components/user/User";
import Transactionaccordion from "./components/functionalities/Transactionaccordion";
import Transactionsaving from "./components/functionalities/Transactionsaving";
import Transactioncreditcard from "./components/functionalities/Transactioncreditcard";
import { connect } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import actionTypes from "./redux/actionTypes";

class App extends React.Component {
	componentDidMount() {
		axios.interceptors.response.use(
			function (response) {
				return response;
			},
			function (error) {
				if (401 === error.response?.status) {
					localStorage.clear();
					window.location.reload();
					this.props.setUser(false);
				}

				return Promise.reject(error);
			}
		);

		if (localStorage.getItem("token")) {
			axios.defaults.headers.common[
				"Authorization"
			] = `Bearer ${localStorage.getItem("token")}`;
			axios.post("/user/profile").then((result) => {
				this.props.setUser(result.data.body);
			});
		}
	}

	render() {
		return (
			<Router basename="/">
				<div>
					<Switch>
						{/* Pages*/}
						<Route exact path="/" component={Home} />
						<Route path="/login" component={Signin} />
						<Route path="/register" component={Signup} />
						<Route path="/profile" component={User} />
						<Route
							path="/extract"
							component={Transactionaccordion}
						/>
						<Route
							path="/extract-savings"
							component={Transactionsaving}
						/>
						<Route
							path="/extract-credit-card"
							component={Transactioncreditcard}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		setUser: (user) => dispatch({ type: actionTypes.setUser, user: user }),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
