import React from 'react';
import Menusername from '../menu/Menusername';
import Availablebalancesaving from './Availablebalancesaving';
import Viewtransactionsaving from './Viewtransactionsaving';
import Footer from '../footer/Footer';


// This is my transactions savings
class Transactionsaving extends React.Component{
    render(){
        return(
            <>
            <Menusername />
              {/*Balance*/}
              <Availablebalancesaving />
            <div className="herograyfull"> 
              <Viewtransactionsaving />
            </div>
            <Footer/>
            </>
        )
    }
}

export default Transactionsaving;