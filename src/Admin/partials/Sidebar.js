import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      className="ui left vertical inverted visible sidebar menu scale down"
      id="sidebar"
    >
      <div className="item">
        <div className="header">General</div>
        <div className="menu">
          <Link to="/admin/products" className="item">
            Products List
          </Link>
          <Link to="/admin/products/create" className="item">
            Add Product
          </Link>
        </div>
      </div>
      <div className="item">
        <div className="header">Orders</div>
        <div className="menu">
          <Link to="/admin/orders" className="item">Orders List</Link>
        </div>
      </div>
      <div className="item">
        <div className="header">Users</div>
        <div className="menu">
          <Link to="/admin/users" className="item">Users List</Link>
          <Link to="/admin/user/create" className="item">Add User</Link>
        </div>
      </div>
    </div>
  );
}
