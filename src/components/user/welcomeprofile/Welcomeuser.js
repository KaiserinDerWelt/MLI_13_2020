import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import axios from "axios";
import actionTypes from "../../../redux/actionTypes";

class Welcomeuser extends React.Component {
	state = {
		editModal: false,
		firstName: this.props.user.firstName,
		lastName: this.props.user.lastName,
	};

	handleClose = () => {
		this.setState({ editModal: false });
	};

	handleOpen = () => {
		this.setState({ editModal: true });
	};

	handleSubmit = (e) => {
		e.preventDefault();

		console.log(this.state.firstName);

		axios
			.put("/user/profile", {
				firstName: this.state.firstName,
				lastName: this.state.lastName,
			})
			.then((result) => {
				this.props.setUser(result.data.body);
				this.setState({ editModal: false });
			})
			.catch((err) => console.log(err.response));
	};

	render() {
		return (
			<>
				<div className="header">
					<h1 className="customerName">
						Welcome back
						<br />
						{this.props.user.firstName} {this.props.user.lastName}!
					</h1>
					<button onClick={this.handleOpen} className="edit-button">
						Edit Name
					</button>
				</div>

				<Modal show={this.state.editModal} onHide={this.handleClose}>
					<form onSubmit={this.handleSubmit}>
						<Modal.Header closeButton>
							<Modal.Title>Edit Name</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<input
								className="form-control form-control-lg"
								type="text"
								placeholder="First name"
								aria-label=".form-control-lg"
								required
								value={this.state.firstName}
								onChange={(e) =>
									this.setState({ firstName: e.target.value })
								}
							/>
							<input
								className="form-control form-control-lg mt-3"
								type="text"
								placeholder="Last name"
								aria-label=".form-control-lg"
								required
								value={this.state.lastName}
								onChange={(e) =>
									this.setState({ lastName: e.target.value })
								}
							/>
						</Modal.Body>
						<Modal.Footer>
							<Button
								variant="secondary"
								onClick={this.handleClose}
							>
								Close
							</Button>
							<Button variant="primary" type="submit">
								Save Changes
							</Button>
						</Modal.Footer>
					</form>
				</Modal>
			</>
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

export default connect(mapStateToProps, mapDispatchToProps)(Welcomeuser);