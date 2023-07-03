import React from "react";
import './loggedinpage.scss';
import CopyrightIcon from '@mui/icons-material/Copyright';


const Loggedinpage = () => {

    return (<div className="loggedin-page-container">

        <div className="loggedin-page-middle-container"></div>

        <div className="loggedin-page-bottom-container">Microsoft Corporation <CopyrightIcon style={{padding:"2px"}} fontSize="0.5rem" />  2023</div>
    </div>
    );
}

export default Loggedinpage;