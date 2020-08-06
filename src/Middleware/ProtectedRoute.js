import React from "react";
import Cookie from "js-cookie";
import { Redirect } from "react-router-dom";

export default function ProtectedRoute(props) {
  const isAuthenticated = Cookie.getJSON("user");

  return (isAuthenticated ? props.children : <Redirect to="/login" />);
}
