import React from "react";
import './loggedinpage.scss';

const loggedinpage = () => {
    return (<div className="loggedin-page-container">
        <div className="loggedin-page-top-container">

            {/* <div className="loggedin-page-top left"> */}
                <div className="loggedin-page-top-left logo-left"></div>
            {/* </div> */}

            <div className="loggedin-page-top-text">Control Panel</div>

            <div className="loggedin-page-top right">
                <div className="loggedin-page-top-right"><i class="fa fa-user-circle fa-2x user"></i></div>
                <div className="loggedin-page-profile-view-container">
                    <div className="loggedin-page-profile-view-option 1">Account</div>
                    <div className="loggedin-page-profile-view-option 2">Settings</div>
                    <div className="loggedin-page-profile-view-option vi-3">Logout</div>
                </div>
            </div>
        </div>

        <div className="loggedin-page-middle-container">
            <div className="loggedin-page-middle-left-options-container">
                <div className="loggedin-page-middle-left-option op-1">Dashboard</div>
                <div className="loggedin-page-middle-left-option anime-effect op-2">Fleets</div>
                <div className="loggedin-page-middle-left-option anime-effect op-3">Clusters</div>
            </div>
        </div>

        <div className="loggedin-page-bottom-container">Microsoft Corporation copyright Ltd.</div>
    </div>
    );
}

export default loggedinpage;