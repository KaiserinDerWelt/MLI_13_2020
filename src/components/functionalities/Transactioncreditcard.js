import React from 'react';
import Menusername from '../menu/Menusername';
import Availablebalancecreditcard from '../functionalities/Availablebalancecreditcard';
import Viewtransactioncreditcard from '../functionalities/Viewtransactioncreditcard';
import Footer from '../footer/Footer';

// This is my transactions savings
class Transactioncreditcard extends React.Component{
    render(){
        return(
            <>
            <Menusername />
              {/*Balance*/}
              <Availablebalancecreditcard />
            <div className="herograyfull"> 
              {/*Transaction*/}
              <Viewtransactioncreditcard />
            </div>
            <Footer/>
            </>
        )
    }
}

export default Transactioncreditcard;