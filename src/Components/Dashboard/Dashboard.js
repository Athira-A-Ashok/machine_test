import React from "react";
import Chart from "../Chart/Chart";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div>
      <Sidebar />
      <div className="dashboard-main">
        <div style={{ float: "right", marginRight: "80px" }}>
          <ion-icon name="menu-outline"></ion-icon>
          <ion-icon
            style={{ paddingLeft: "20px" }}
            name="grid-outline"
          ></ion-icon>
          <ion-icon
            style={{ paddingLeft: "20px" }}
            name="git-branch-outline"
          ></ion-icon>
        </div>
        <div className="chart-style">
          <Chart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
