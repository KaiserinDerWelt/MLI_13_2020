import React from 'react';
import Menu from '../menu/Menu';
import Heroblack from '../hero/Heroblack';
import Footer from '../footer/Footer';
import axios from "axios";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
//Created a signup
class Signup extends React.Component {
	state = {
		email: "",
		password: "",
		firstName: "",
		lastName: "",
		error: "",
	};

	handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("/user/signup", {
				email: this.state.email,
				password: this.state.password,
				firstName: this.state.firstName,
				lastName: this.state.lastName,
			})
			.then(() => {
				this.props.history.push("/login");
			})
			.catch((error) =>
				this.setState({ error: error.response.data.message })
			);
	};

	render() {
		return (
			<>
				{this.props.user && <Redirect to="/profile" />}
				<Menu />

				<div className="heroblack" style={{ height: "650px" }}>
					<div className="sign-in-content login">
						<div className="brandperson">
							<i className="fa fa-user-circle sign-in-icon"></i>
						</div>
						<h1>Sign Up</h1>
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
								<label htmlFor="firstname">First Name</label>
								<input
									type="text"
									id="firstname"
									value={this.state.firstName}
									required
									onChange={(e) =>
										this.setState({
											firstName: e.target.value,
										})
									}
								/>
							</div>
							<div className="input-wrapper">
								<label htmlFor="lastname">Last Name</label>
								<input
									type="text"
									id="lastname"
									required
									value={this.state.lastName}
									onChange={(e) =>
										this.setState({
											lastName: e.target.value,
										})
									}
								/>
							</div>
							<div className="input-wrapper">
								<label htmlFor="username">Email</label>
								<input
									type="email"
									id="username"
									required
									value={this.state.email}
									onChange={(e) =>
										this.setState({
											email: e.target.value,
										})
									}
								/>
							</div>
							<div className="input-wrapper">
								<label htmlFor="password">Password</label>
								<input
									type="password"
									id="password"
									required
									value={this.state.password}
									onChange={(e) =>
										this.setState({
											password: e.target.value,
										})
									}
								/>
							</div>
							<button type="submit" className="sign-in-button">
								Register Now!
							</button>
						</form>
					</div>
				</div>
				<Footer />
			</>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
	};
}

export default connect(mapStateToProps)(Signup);