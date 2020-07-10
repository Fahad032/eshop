import React from "react";

export default function Dashboard() {
  return (
    <div>
      {/* TOP NAVIGATION BAR */}
      <div className="ui inverted top fixed menu">
        <div className="ui left inverted borderless menu">
          <a className="item">
            <i className="tachometer alternate icon"></i> Eshop Dashboard
            {/* <i className="bars icon"></i> */}
          </a>
        </div>
        <div className="right menu">
          <a className="item">
            <i className="bell icon"></i>
          </a>
          <a className="ui pointing dropdown link item">
            <i className="user circle icon"></i>
            <i className="dropdown icon"></i>
            <div className="menu">
              <div className="item">Settings</div>
              <div className="item">Profile</div>
              <div className="item">Logout</div>
            </div>
          </a>
        </div>
      </div>


        {/* SIDEBAR MENU  */}
        <div
          className="ui left vertical inverted visible sidebar menu  scale down" id="sidebar"
        >
          <div className="item">
            <div className="header">General</div>
            <div className="menu">
              <div className="item">Products List</div>
              <div className="item">Add Product</div>
            </div>
          </div>
          <div className="item">
            <div className="header">Orders</div>
            <div className="menu">
              <div className="item">Orders List</div>
            </div>
          </div>
          <div className="item">
            <div className="header">Users</div>
            <div className="menu">
              <div className="item">Users List</div>
              <div className="item">Add User</div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT    */}
        <div className="main-content pusher">
        <div className="ui container">
          <div className="ui four stackable cards">
            {[1, 2, 3, 4].map((i) => {
              return (
                <div className="ui fluid card">
                  <div className="content">
                    <div className="header">New Orders</div>
                    <div className="center aligned description teal-text number-highlights">
                      45
                    </div>
                  </div>
                  <div className="extra content">
                    <button className="ui primary fluid button">
                      View Orders
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="ui four stackable cards">
            {[1, 2, 3, 4].map((i) => {
              return (
                <div className="ui fluid card">
                  <div className="content">
                    <div className="header">Monthly Sell</div>
                    <div className="center aligned description green-text number-highlights">
                      $45K
                    </div>
                  </div>
                  <div className="extra content">
                    <button className="ui primary fluid button">
                      View Orders
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <table className="ui celled table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Job</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Name">James</td>
                <td data-label="Age">24</td>
                <td data-label="Job">Engineer</td>
              </tr>
              <tr>
                <td data-label="Name">Jill</td>
                <td data-label="Age">26</td>
                <td data-label="Job">Engineer</td>
              </tr>
              <tr>
                <td data-label="Name">Elyse</td>
                <td data-label="Age">24</td>
                <td data-label="Job">Designer</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


    </div>
  );
}
