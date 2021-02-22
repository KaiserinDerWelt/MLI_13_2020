import React from 'react';
import Menu from '../menu/Menu';
import Heroblack from '../hero/Heroblack';
import Footer from '../footer/Footer';

//Created a signup
class Signin extends React.Component{
    render(){
        return(
            <>
            <Menu />
            <Heroblack/>
            <Footer/>
            </>
        )
    }
}

export default Signin;