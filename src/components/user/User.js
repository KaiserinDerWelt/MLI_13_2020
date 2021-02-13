import React from 'react';
import Menusername from '../menu/Menusername';
import Welcomeuser from  './welcomeprofile/Welcomeuser';
import Checking from  './accountmanagement/Checking';
import Savings from  './accountmanagement/Savings';
import Creditcard from  './accountmanagement/Creditcard';

import Footer from '../footer/Footer';

class User extends React.Component{
    render(){
        return(
            <>
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

export default User;