import React from "react";
import profile_image from "../Images/profile_image.jpg";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div>
      <div className="navbar-main">
        <div className="navbar-menu">
          <div className="navbar-left-menu">
            People<span>+</span>
          </div>
          <div className="navbar-right-menu">
            <input type="search" placeholder="Search" />
            <button>Filter</button>
          </div>
        </div>
      </div>
      <div className="sidebar-main">
        <div className="circle"></div>
        <div className="top">
          <div className="icons">
            <ion-icon name="grid-outline"></ion-icon>
            <ion-icon name="checkbox-outline"></ion-icon>
            <ion-icon name="calendar-clear-outline"></ion-icon>
            <ion-icon name="chatbox-outline"></ion-icon>
            <ion-icon style={{ color: "#644A03" }} name="person"></ion-icon>
            <ion-icon name="business-outline"></ion-icon>
            <ion-icon
              style={{ marginTop: "50px" }}
              name="notifications-outline"
            ></ion-icon>
            <div className="profile-image">
              <img src={profile_image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
