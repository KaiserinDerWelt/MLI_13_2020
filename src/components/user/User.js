import React from 'react';
import Menusername from '../menu/Menusername';
import Footer from '../footer/Footer';

class User extends React.Component{
    render(){
        return(
            <>
           <Menusername />
           <Footer/>
            </>
        )
    }
}

export default User;