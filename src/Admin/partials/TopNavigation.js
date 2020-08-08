import React from "react";
import { useHistory } from "react-router-dom";
import Cookie from 'js-cookie';
import { USER_LOGOUT_SUCCESS } from './../../store/actions/actionTypes';
import { useDispatch } from "react-redux";

export default function TopNavigation() {

  const history = useHistory();
  const dispatch = useDispatch();

  const logout = () => {
    
    Cookie.remove('user');
    dispatch({
      type: USER_LOGOUT_SUCCESS
    });
    history.push('/login')

  };


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



        <div className="ui simple dropdown item">
          <i className="user circle icon"></i> Jhon Doe
          <i className="dropdown icon"></i>
          <div className="menu">
            <a className="item" href="/settings">
              <i className="settings icon"></i> Account Settings
            </a>
            <a className="item" href="/profile">
              <i className="user outline icon"></i> Profile
            </a>
            <span className="item" onClick={logout}>
              <i className="logout icon"></i> Logout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
