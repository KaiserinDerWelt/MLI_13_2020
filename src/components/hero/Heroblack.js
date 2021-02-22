import React from "react";
import axios from "axios";
import actionTypes from "../../redux/actionTypes";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
class Heroblack extends React.Component {
	state = {
		email: "",
		password: "",
		rememberMe: true,
		error: "",
	};

	handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("/user/login", {
				email: this.state.email,
				password: this.state.password,
			})
			.then((result) => {
				if (this.state.rememberMe) {
					localStorage.setItem("token", result.data.body.token);
				}

				axios.defaults.headers.common[
					"Authorization"
				] = `Bearer ${result.data.body.token}`;

				axios.post("/user/profile").then((result) => {
					this.props.setUser(result.data.body);
				});
			})
			.catch((error) => {
				this.setState({
					error: error?.response?.data?.message,
					email: "",
					password: "",
				});
			});
	};

	render() {
		return (
			<>
				{this.props.user && <Redirect to="/profile" />}
				<div className="heroblack">
					<div className="sign-in-content login">
						<div className="brandperson">
							<i className="fa fa-user-circle sign-in-icon"></i>
						</div>
						<h1>Sign In</h1>
						{this.state.error && (
							<div className="alert alert-danger" role="alert">
								{this.state.error}
							</div>
						)}
						<form
							className="formContainer"
							onSubmit={this.handleSubmit}
						>
							<div className="input-wrapper">
								<label htmlFor="username">Email</label>
								<input
									type="email"
									id="username"
									value={this.state.email}
									onChange={(e) =>
										this.setState({ email: e.target.value })
									}
									required
								/>
							</div>
							<div className="input-wrapper">
								<label htmlFor="password">Password</label>
								<input
									type="password"
									id="password"
									value={this.state.password}
									onChange={(e) =>
										this.setState({
											password: e.target.value,
										})
									}
									required
								/>
							</div>
							<div className="input-remember">
								<input
									type="checkbox"
									id="remember-me"
									checked={this.state.rememberMe}
									onChange={(e) =>
										this.setState({
											rememberMe: e.target.checked,
										})
									}
								/>
								<label htmlFor="remember-me">Remember me</label>
							</div>
							<button type="submit" className="sign-in-button">
								Sign In
							</button>
						</form>
					</div>
				</div>
			</>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
	};
}

function mapDispatchTiProps(dispatch) {
	return {
		setUser: (user) => dispatch({ type: actionTypes.setUser, user: user }),
	};
}

export default connect(mapStateToProps, mapDispatchTiProps)(Heroblack);
