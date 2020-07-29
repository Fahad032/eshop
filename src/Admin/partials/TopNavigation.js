import React from "react";

export default function TopNavigation() {
  return (
    <div className="ui inverted top fixed menu">
      <div className="ui left inverted borderless menu">
        <a className="item" href="/dashboard">
          <i className="tachometer alternate icon"></i> Eshop Dashboard
          {/* <i className="bars icon"></i> */}
        </a>
      </div>
      <div className="right menu">
        <span className="item">
          <i className="bell icon"></i>
        </span>
        <div className="ui pointing dropdown link item">
          <i className="user circle icon"></i>
          <i className="dropdown icon"></i>
          <div className="menu">
            <div className="item">Settings</div>
            <div className="item">Profile</div>
            <div className="item">Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
}
