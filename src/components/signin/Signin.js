import React from 'react';
import Menu from '../menu/Menu';
import Form from '../signin/Form';
import Footer from '../footer/Footer';

class Signin extends React.Component{
    render(){
        return(
            <>
            <Menu />
            <Form/>
            <Footer/>
            </>
        )
    }
}

export default Signin;