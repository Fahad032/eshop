import React from "react";

export default function Navigation() {
  return (
    <div className="ui attached stackable menu inverted">
      <div className="ui container">
        <a className="item">
          <i className="home icon"></i> Eshop
        </a>
        <a className="item">
          <i className="grid building outline icon"></i> Collections
        </a>
        <a className="item">
          <i className="grid bullhorn icon"></i> Latest
        </a>
        <a className="item">
          <i className="grid newspaper icon"></i> Blog
        </a>
        <a className="item">
          <i className="grid phone icon"></i> Contact
        </a>
        <div className="right item">
          <div className="ui input">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <a className="item">
          <i className="cart icon"></i> Cart
        </a>

        <a className="item">
          <i className="user outline icon"></i>Login
        </a>

        <div className="ui simple dropdown item">
          <i className="user outline icon"></i> Jhon Doe
          <i className="dropdown icon"></i>
          <div className="menu">
            <a className="item">
              <i className="edit icon"></i> Edit Profile
            </a>
            <a className="item">
              <i className="tags icon"></i> My Orders
            </a>
            <a className="item">
              <i className="settings icon"></i> Account Settings
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
