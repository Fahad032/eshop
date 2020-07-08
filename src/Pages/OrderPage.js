import React from "react";

export default function OrderPage() {
  return (
    <div>
      {/* NAVIGATION MENU */}
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

      {/* Main Content */}

      <div className="ui container">
        <div className="ui padded column grid">
          <div className="ui wide column">
            <br />
            <div className="ui basic segment">
              <div className="ui header">Orders</div>

              {[1, 2, 3, 4, 5].map((i) => {
                return (
                  <div className="order-details">
                    <div className="ui top attached header">
                      Order No: #9675372 &nbsp;
                      <label className="ui right label">Pending</label>
                      <span style={{ float: "right" }}>
                        Ordered At: 08/07/2020
                      </span>
                    </div>

                    <div className="ui attached segment">
                      <div className="ui sixteen wide column">
                        <h3>Shipping Address</h3>
                        <p>
                          Office Building, 123, fake street, Dhaka Bangladesh
                        </p>
                      </div>
                      <table className="ui stackable striped compact table">
                        <thead>
                          <tr>
                            <th>ProductID</th>
                            <th>Product</th>
                            <th className="right aligned">Qty</th>
                            <th className="right aligned">Price</th>
                            <th className="right aligned">Sub Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[1, 2, 3].map((i) => {
                            return (
                              <tr key={"key" + i}>
                                <td className="collapsing">
                                  <i className="tags icon"></i> #9675372
                                </td>
                                <td>
                                  <div className="ui two column grid">
                                    <div className="ui three wide column">
                                      <img
                                        width="50"
                                        height="50"
                                        src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"
                                      />
                                    </div>
                                    <div className="ui twelve wide column">
                                      Product Title
                                      <br />
                                      Vendor: Product Vendor
                                    </div>
                                  </div>
                                </td>
                                <td className="right aligned">5</td>
                                <td className="right aligned">$25.25</td>
                                <td className="right aligned"> $125.25</td>
                              </tr>
                            );
                          })}
                        </tbody>
                        <tfoot className="full-width">
                            <tr>
                              <th>
                                <b>Total</b>
                              </th>
                              <th colSpan="4" className="right aligned">
                                <b>$125.25</b>
                              </th>
                            </tr>
                          </tfoot>
                      </table>
                    </div>

                    <br />
                  </div>
                );
              })}
            </div>
            <br />
          </div>
        </div>
      </div>

      {/* FOOTER MENU */}
      <div className="ui inverted vertical footer segment">
        <div className="ui center aligned container">
          <div className="ui stackable inverted divided grid">
            <div className="three wide column">
              <h4 className="ui inverted header">Group 1</h4>
              <div className="ui inverted link list">
                <a href="#" className="item">
                  Link One
                </a>
                <a href="#" className="item">
                  Link Two
                </a>
                <a href="#" className="item">
                  Link Three
                </a>
                <a href="#" className="item">
                  Link Four
                </a>
              </div>
            </div>
            <div className="three wide column">
              <h4 className="ui inverted header">Group 2</h4>
              <div className="ui inverted link list">
                <a href="#" className="item">
                  Link One
                </a>
                <a href="#" className="item">
                  Link Two
                </a>
                <a href="#" className="item">
                  Link Three
                </a>
                <a href="#" className="item">
                  Link Four
                </a>
              </div>
            </div>
            <div className="three wide column">
              <h4 className="ui inverted header">Group 3</h4>
              <div className="ui inverted link list">
                <a href="#" className="item">
                  Link One
                </a>
                <a href="#" className="item">
                  Link Two
                </a>
                <a href="#" className="item">
                  Link Three
                </a>
                <a href="#" className="item">
                  Link Four
                </a>
              </div>
            </div>
            <div className="seven wide column">
              <h4 className="ui inverted header">Address</h4>
              <p>Office Buildings, 123, Fake street, Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="ui inverted section divider"></div>
          <div className="ui horizontal inverted small">
            Copyright &copy;2020, All right reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
