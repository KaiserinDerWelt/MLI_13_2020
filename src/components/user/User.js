import React from 'react';
import Menusername from '../menu/Menusername';
import Welcomeuser from  './welcomeprofile/Welcomeuser';
import Checking from  './accountmanagement/Checking';
import Savings from  './accountmanagement/Savings';
import Creditcard from  './accountmanagement/Creditcard';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Footer from '../footer/Footer';

class User extends React.Component{
    render(){
        return(
            <>
            {this.props.user ? null : <Redirect to="/login" />}
             <Menusername />
             <div className="heroblackfull">
             <Welcomeuser />
           <Checking />
           <Savings />
           <Creditcard/>
             </div>
             <Footer/>
            </>
        )
    }
}

function mapStateToProps(state) {
	return {
		user: state.user,
	};
}

export default connect(mapStateToProps)(User);