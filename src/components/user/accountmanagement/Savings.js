import React from 'react';
import { Link } from "react-router-dom";

class Savings extends React.Component{
    render(){
        return(
            <>
          <div className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
						<Link
							style={{ textDecoration: "none" }}
							to="/extract-savings"
						>
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


export default Savings;