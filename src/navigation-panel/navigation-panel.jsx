import React, { useState } from "react";
import './navigation-panel.scss';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import PeopleIcon from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import HubIcon from '@mui/icons-material/Hub';

function Navigation() {

    const [navList, setNavlist] = useState(false);
    const showNavlist = () => setNavlist(!navList);

    return (
        <div className={navList ? 'navlist active' : 'navlist'}>
            <div id="hamburger" className="hamburger" type="button" onClick={showNavlist}>
                {navList? <KeyboardArrowLeftIcon sx={{fontSize: 40, position: 'absolute', top: '20px', right: '20px' }} /> : <MenuIcon sx={{ fontSize: 30,position: 'absolute', right: '-50px'}} />}
            </div>

            <ul id='nav-list' onClick={showNavlist}>
                <Link className="nav-panel-link" to='/'><li>
                    <DashboardIcon />
                    <span class="nav-text">
                        Dashboard
                    </span>
                </li></Link>

                <Link className="nav-panel-link" to='/fleet'><li>
                    <DeviceHubIcon />
                    <span class="nav-text">
                        Fleets
                    </span>
                </li></Link>

                <Link className="nav-panel-link" to='/cluster'><li>
                    <HubIcon />
                    <span class="nav-text">
                        Clusters
                    </span>
                </li></Link>

                <Link className="nav-panel-link" to='/cluster'><li>
                    <PeopleIcon />
                    <span class="nav-text">
                        Users
                    </span>
                </li></Link>
            </ul>
        </div>
    );
}

export default Navigation;