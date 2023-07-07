import React,{useState} from "react";
import './header.scss';
import { Link } from "react-router-dom";
import Navigation from "../navigation-panel/navigation-panel";
import Logo from '../images/logo.png'
import Mslogo from '../images/ms_logo.svg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SignIn from "./signin/signin";

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const handleSetLoggedIn = (isLoggedIn) => {
        setLoggedIn(isLoggedIn);
      };
    return (
        <div className="header-page-top-container">

            <div className="header-page-top-left-navigation-panel">
            {loggedIn ?
                (<div className="header-page-top-navigation"><Navigation /></div>) : ("")}
                <Link className='' to='/'><div className="logo-left"><img className="logo-1" src={Logo} alt="az" /></div></Link>
            </div>

            <div className="header-page-top-text">Private SAAS (&#945;)</div>

            <div className="logo-right"><img className="logo-2" src={Mslogo} alt="microsoft" /></div>
            {/* <div className="header-page-top-right"> */}
                {/* <div className="header-page-top-right-user-icon"> */}
                    <SignIn setLoggedIn={handleSetLoggedIn} loggedIn={loggedIn} />
                    {/* </div> */}
                {/* <div className="header-page-top-right-user-options-container">
                    <div className="header-page-top-right-user-option option-1">Account</div>
                    <div className="header-page-top-right-user-option option-2">Settings</div>
                    <div className="header-page-top-right-user-option option-3">Logout</div>
                </div>
            </div> */}

        </div>
    )
}

export default Header;