import React from 'react';
import Menusername from '../menu/Menusername';
import Availablebalance from '../functionalities/Availablebalance';
import Viewtransactions from '../functionalities/Viewtransactions';
import Footer from '../footer/Footer';

// This is my transactions checking page
class Transactionaccordion extends React.Component{
    render(){
        return(
            <>
            <Menusername />
            <Availablebalance />
            <div className="herograyfull"> 
            <Viewtransactions />
            </div>
            <Footer/>
            </>
        )
    }
}

export default Transactionaccordion;