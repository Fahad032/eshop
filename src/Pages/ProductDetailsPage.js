import React from "react";

export default function HomePage() {
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
        <div className="ui two column grid">
          <div className="column">
            <div className="ui card fluid">
              <div className="image">
                <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80" />
              </div>
            </div>
          </div>
          <div className="ui column">
            <div className="ui three cards">
              <div className="ui card">
                <div className="image">
                  <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80" />
                </div>
              </div>
              <div className="ui card">
                <div className="image">
                  <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80" />
                </div>
              </div>
              <div className="ui card">
                <div className="image">
                  <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80" />
                </div>
              </div>
            </div>

            <br /><br />
            <div className="ui sixteenth wide column">
                <div className="ui dividing header">Product Info</div>
              </div>
            <div className="ui padded two column grid">
              <div className="ui eight wide column">
                <span>Product: Product Title</span>
                <br />
                <span>Price: $123</span>
                <br />
                <span>Rating: (5/5)</span>
                <br />
                <span>Vendor: Product vendor Name</span>
                <br />
              </div>
              <div className="ui eight wide column">
                <div className="ui form">
                  <div className="field">
                    <input
                      type="number"
                      placeholder="Quantity"
                      step="1"
                      min="0"
                    />
                  </div>
                  <div className="field">
                    <button className="ui teal large fluid button">
                      <i className="cart plus icon" /> Add To Cart
                    </button>
                  </div>
                </div>
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
