import React from 'react';
import {NavLink} from "react-router-dom";

class Menu extends React.Component{
    render(){
        return(
          <>
            <nav className="main-nav">
              <NavLink to="/" className="main-nav-logo">
                <img
                  className="main-nav-logo-image"
                  src="./img/argentBankLogo.png"
                  alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
              </NavLink>
              <div>
                <i className="fa fa-user-circle"></i>
                <NavLink to="/login" className="nav-link-property" >
                  Sign In
          </NavLink>
                <NavLink
                  to="/register"
                  className="nav-link-property"
                  style={{ marginLeft: "15px" }}
                >
                  Register
						</NavLink>
              </div>
            </nav>
          </>
        )
    }
}

export default Menu;