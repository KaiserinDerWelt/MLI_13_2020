import React from 'react';
import Menu from '../menu/Menu';
import Menusername from "../menu/Menusername";
import Hero from '../hero/Hero';
import Services from '../services/Services';
import Footer from '../footer/Footer';
import { connect } from "react-redux";

class Home extends React.Component{
    render(){
        return(
            <>
            {this.props.user ? <Menusername /> : <Menu />}
           <Hero/>
           <Services/>
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

export default connect (mapStateToProps)(Home);

