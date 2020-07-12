import React from "react";

import TopNavigation from "./../Admin/partials/TopNavigation";
import Sidebar from "./../Admin/partials/Sidebar";

export default function AdminLayout(props) {
  return (
    <div>
      {/* TOP NAVIGATION BAR */}
      <TopNavigation />

      {/* SIDEBAR MENU  */}
      <Sidebar />

      {/* MAIN CONTENT    */}
      <div className="pusher">
        <div className="main-content pusher">
          <div className="ui container">{props.children}</div>
        </div>
      </div>
    </div>
  );
}
