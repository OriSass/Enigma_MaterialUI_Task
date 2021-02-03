import React from 'react';
import "./Dashboard.css";

function Dashboard() {
    return (
        <div className="dashboard-container"> 
            <div className="row">
                <div className="cell1">Cell 1</div>
                <div className="cell2">Cell 2</div>
                <div className="cell3">Cell 3</div>
            </div>
            <div className="row">
                <div className="cell4">Cell 1</div>
                <div className="cell5">Cell 2</div>
                <div className="cell6">Cell 3</div>
                <div className="cell7">Cell 4</div>
            </div>
            <div className="row">
                <div className="cell8">Cell 1</div>
                <div className="cell9">Cell 2</div>
                <div className="cell10">Cell 3</div>
                <div className="cell11">Cell 4</div>
            </div>
        </div>
    )
}

export default Dashboard
