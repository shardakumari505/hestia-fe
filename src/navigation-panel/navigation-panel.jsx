import React, { useState } from "react";
import './navigation-panel.scss';
import { Link } from "react-router-dom";

function Navigation() {

    const [navList, setNavlist] = useState(false);
    const showNavlist = () => setNavlist(!navList);

    return (
        <div className={navList ? 'navlist active' : 'navlist'}>
            <button id="hamburger" className="hamburger" type="button" onClick={showNavlist}>
                <div></div>
            </button>

            <ul id='nav-list' onClick={showNavlist}>
                <Link className="nav-panel-link" to='/dashboard'><li>
                    <span class="nav-text">
                        Dashboard
                    </span>
                </li></Link>

                <Link className="nav-panel-link" to='/fleet'><li>
                    <span class="nav-text">
                        Fleets
                    </span>
                </li></Link>

                <Link className="nav-panel-link" to='/cluster'><li>
                    <span class="nav-text">
                        Clusters
                    </span>
                </li></Link>
            </ul>
        </div>
    );
}

export default Navigation;