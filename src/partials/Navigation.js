import React, { useEffect } from "react";
import { isAuthenticated, logout } from "./../utils/AuthHandler";

export default function Navigation() {


  useEffect(() => {
    console.log(isAuthenticated());
  }, []);

  return (
    <div className="ui attached stackable menu inverted">
      <div className="ui container">
        <a className="item" href="/home">
          <i className="home icon"></i> Eshop
        </a>
        <a className="item" href="/collections">
          <i className="grid building outline icon"></i> Collections
        </a>
        <a className="item" href="/home">
          <i className="grid bullhorn icon"></i> Latest
        </a>
        <a className="item" href="/blog">
          <i className="grid newspaper icon"></i> Blog
        </a>
        <a className="item" href="/contact">
          <i className="grid phone icon"></i> Contact
        </a>
        <div className="right item">
          <div className="ui input">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <a className="item" href="/cart">
          <i className="cart icon"></i> Cart
        </a>

        {!isAuthenticated() && (
          <a className="item" href="/login">
            <i className="user outline icon"></i>Login
          </a>
        )}

        {isAuthenticated() && (<div className="ui simple dropdown item">
          <i className="user outline icon"></i> Jhon Doe
          <i className="dropdown icon"></i>
          <div className="menu">
            <a className="item" href="/profile">
              <i className="edit icon"></i> Edit Profile
            </a>
            <a className="item" href="/my-orders">
              <i className="tags icon"></i> My Orders
            </a>
            <a className="item" href="/settings">
              <i className="settings icon"></i> Account Settings
            </a>
            <span className="item" onClick={logout}> 
              <i className="logout icon"></i> Logout
            </span>
          </div>
        </div>)}
      </div>
    </div>
  );
}
