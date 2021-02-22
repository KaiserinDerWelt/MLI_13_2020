import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import actionTypes from "../../redux/actionTypes";

class Menusername extends React.Component{
  logout = () => {
		localStorage.removeItem("token");
		this.props.setUser(false);
	};
    render(){
        return(
            <>
            <nav className="main-nav">
					<Link className="main-nav-logo" to="/">
						<img
							className="main-nav-logo-image"
							src="./img/argentBankLogo.png"
							alt="Argent Bank Logo"
						/>
						<h1 className="sr-only">Argent Bank</h1>
					</Link>
					<div>
						<Link className="main-nav-item" to="/profile">
							<i className="fa fa-user-circle"></i>
							{this.props.user.firstName}
						</Link>
						<a
							className="main-nav-item"
							onClick={this.logout}
							style={{ cursor: "pointer" }}
						>
							<i className="fa fa-sign-out"></i>
							Sign Out
						</a>
					</div>
				</nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(Menusername);