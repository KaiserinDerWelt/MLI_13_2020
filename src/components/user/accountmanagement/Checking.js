import React from 'react';
import { Link } from "react-router-dom";


class Checking extends React.Component{
    render(){
        return(
            <>
             <div className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
						<Link style={{ textDecoration: "none" }} to="/extract">
							<button className="transaction-button">
								View transactions
							</button>
						</Link>
					</div>
      </div>
            </>
        )
    }
}


export default Checking;