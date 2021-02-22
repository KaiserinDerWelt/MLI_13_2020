import React from 'react'
import { Link } from "react-router-dom";

class Creditcard extends React.Component{
    render(){
        return(
            <>
              <div className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
						<Link
							style={{ textDecoration: "none" }}
							to="/extract-credit-card"
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

export default Creditcard;