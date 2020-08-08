import React from "react";
import Navigation from "./../partials/Navigation";
import Footer from "./../partials/Footer";

export default function FrontendLayout(props) {
  return (
    <div>
      {/* NAVIGATION MENU */}
      <Navigation />

      {/* Main Content */}
      <div
        className="ui container"
        style={{ paddingTop: 40, paddingBottom: 40 }}
      >
        {props.children}
      </div>

      {/* FOOTER MENU */}
      <Footer />
    </div>
  );
}
