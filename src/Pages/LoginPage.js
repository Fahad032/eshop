import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import FrontendLayout from "./../layouts/FrontendLayout";

import {login} from './../store/actions/userActions';
import { useDispatch } from "react-redux";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit =  async (e) => {
    e.preventDefault();
    // TODO: validation

    await dispatch(login({
      email: email,
      password: password
    }));
    
    history.push('/admin/dashboard');

  };

  return (
    <FrontendLayout>
      <div
        className="ui container"
        style={{ paddingTop: 40, paddingBottom: 40 }}
      >
        <div className="ui top attached header">
          <i className="lock icon"></i>
          <div className="content">Account Login</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="ui placeholder attached segment">
            <div className="ui two column very relaxed stackable grid">
              <div className="column">
                <div className="ui form">
                  <div className="field">
                    <label>Username</label>
                    <div className="ui left icon input">
                      <input
                        type="email"
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <i className="user icon"></i>
                    </div>
                  </div>
                  <div className="field">
                    <label>Password</label>
                    <div className="ui left icon input">
                      <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <i className="lock icon"></i>
                    </div>
                  </div>
                  <button type="submit" className="ui blue submit button">Login</button>
                </div>
              </div>
              <div className="middle aligned column">
                <Link className="ui big button" to="/register">
                  <i className="signup icon"></i>
                  Sign Up
                </Link>
              </div>
            </div>
            <div className="ui vertical divider">Or</div>
          </div>
        </form>
      </div>
    </FrontendLayout>
  );
}
