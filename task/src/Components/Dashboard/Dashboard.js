import React from "react";
import TradeTable from "./TradeTable/TradeTable.js";
import BuyAndSell from "./BuyAndSell/BuyAndSell.js";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="row">
        <TradeTable />
        <div className="cell2">Cell 2</div>
        <div className="cell3">Cell 3</div>
      </div>

      <div className="row">
        <div className="cell4">
          <div>1.1</div>
          <div>1.2</div>
        </div>
        <div className="cell5">Cell 2</div>
        <div className="cell6">
          <BuyAndSell />
          <div>3.2</div>
        </div>
        <div className="cell7">
          <div>4.1</div>
          <div>4.2</div>
        </div>
      </div>

      <div className="row">
        <div className="cell8">Cell 1</div>
        <div className="cell9">Cell 2</div>
        <div className="cell10">Cell 3</div>
        <div className="cell11">Cell 4</div>
      </div>
    </div>
  );
}

export default Dashboard;
