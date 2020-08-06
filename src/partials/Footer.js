import React from "react";

export default function Footer() {
  return (
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
  );
}
