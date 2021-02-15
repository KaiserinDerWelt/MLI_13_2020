import React from 'react';
import Menusername from '../menu/Menusername';
import Viewtransactions from '../functionalities/Viewtransactions';
import Footer from '../footer/Footer';
// This is my transactions page
class Transactionaccordion extends React.Component{
    render(){
        return(
            <>
            <Menusername />
            <div className="herograyfull">
            {/* Place table component here*/}
            <Viewtransactions />
            </div>
            <Footer/>
            </>
        )
    }
}

export default Transactionaccordion;