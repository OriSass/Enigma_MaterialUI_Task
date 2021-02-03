import React from "react";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import AddToHomeScreenIcon from "@material-ui/icons/AddToHomeScreen";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import AndroidIcon from "@material-ui/icons/Android";
import "./SideNavBar.css";

function SideNavBar() {
  return (
    <div className="side-nav-container">
      <div>
        {" "}
        <AccountBalanceIcon />
      </div>
      <div>
        <AccessTimeIcon />
      </div>
      <div>
        <AddToHomeScreenIcon />
      </div>
      <div>
        <AirplanemodeActiveIcon />
      </div>
      <div>
        <AndroidIcon />
      </div>
    </div>
  );
}

export default SideNavBar;
