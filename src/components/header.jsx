import React from "react";
import './header.scss';
import { Link } from "react-router-dom";
import Navigation from "../navigation-panel/navigation-panel";
import Logo from '../images/logo.png'
import Mslogo from '../images/ms_logo.svg'

const Header = () => {
    return(
        <div className="header-page-top-container">

            <div className="header-page-top-left-navigation-panel">
                <Navigation />
            </div>

            <Link className='' to='/'><div className="logo-left"><img className="logo-1" src={Logo} /></div></Link>
            <div className="logo-right"><img className="logo-1" src={Mslogo} /></div>

            <div className="header-page-top-text">Control Panel</div>

            <div className="header-page-top right">
                <div className="header-page-top-right"><i class="fa fa-user-circle fa-2x user"></i></div>
                <div className="header-page-profile-view-container">
                    <div className="header-page-profile-view-option 1">Account</div>
                    <div className="header-page-profile-view-option 2">Settings</div>
                    <div className="header-page-profile-view-option vi-3">Logout</div>
                </div>
            </div>
        </div>
    )
}

export default Header;