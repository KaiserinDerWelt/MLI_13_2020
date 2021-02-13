import React from 'react';
import Menusername from '../menu/Menusername';
import Savings from  './accountmanagement/Savings';

import Footer from '../footer/Footer';

class User extends React.Component{
    render(){
        return(
            <>
           <Menusername />
           <Savings />
           <Footer/>
            </>
        )
    }
}

export default User;