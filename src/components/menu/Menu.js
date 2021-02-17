import React from 'react';
import {NavLink} from "react-router-dom";

class Menu extends React.Component{
    render(){
        return(
            <>
            <nav className="main-nav">
      <a className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          <NavLink to="/profile" className="nav-link-property" >
          Sign In
          </NavLink>
        </a>
      </div>
    </nav>
            </>
        )
    }
}

export default Menu;