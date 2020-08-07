import React from "react";
import Cookie from "js-cookie";
import { Redirect } from "react-router-dom";

export default function ProtectedRoute(props) {

  // TODO: verify that the cookie is valid and is not expired
  // TODO: attach csrf protection
  const isAuthenticated = Cookie.getJSON("user");

  return isAuthenticated ? props.children : <Redirect to="/login" />;
}
