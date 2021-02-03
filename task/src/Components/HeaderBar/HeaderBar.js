import React from 'react';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import "./HeaderBar.css";

function HeaderBar() {
    return (
        <div className="header">
            <div><AcUnitIcon /> <b>Dashboard</b></div>
            <span className="date-time">3:02:22 PM wednesday, December 16 2020</span>
            <div>Icon + Tom Reiven + DDl</div>
        </div>
    )
}

export default HeaderBar
