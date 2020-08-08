import React from "react";
import { Redirect } from "react-router-dom";
import { isAuthenticated } from './../utils/AuthHandler';

export default function ProtectedRoute(props) {

  // TODO: verify that the cookie is valid and is not expired
  // TODO: attach csrf protection
  return isAuthenticated ? props.children : <Redirect to="/login" />;
}
