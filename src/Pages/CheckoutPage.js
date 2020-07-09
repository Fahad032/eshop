import React from "react";

export default function CheckoutPage() {
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
      <div
        className="ui container"
        style={{ paddingTop: 40, paddingBottom: 40 }}
      >
        <div className="ui top header">
          <i className="cart icon"></i>
          <div className="content">Checkout Details</div>
        </div>
        <div className="ui segment">
            <div className="ui two column grid">
                <div className="ui ten wide column">
                <table className="ui compact table">
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th className="right aligned">Price</th>
                <th className="right aligned">Qty</th>
                <th className="right aligned">Sub Total</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((i) => {
                return (
                  <tr>
                    <td>1</td>
                    <td>
                      <h4 class="ui image header">
                        <img
                          className="ui massive rounded image"
                          src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"
                        />
                        <div class="content">
                          Product Title
                          <div class="sub header">Vendor</div>
                        </div>
                      </h4>
                    </td>
                    <td className="right aligned">$25.45</td>
                    <td className="right aligned">3</td>
                    <td className="right aligned">$76.25</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
                <tr>
                    <th colSpan="4">Total :</th>
                    <th className="right aligned"><i className="dollar sign icon"></i>123</th>
                </tr>
            </tfoot>
          </table>

                </div>

                <div className="ui six wide middle aligned column">
                    <div className="ui center aligned basic segment">
                        <button className="ui large teal button">Place Order</button>
                    </div>
                </div>

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
