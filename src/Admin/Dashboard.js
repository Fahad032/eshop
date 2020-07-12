import React from "react";
import AdminLayout from "./../layouts/AdminLayout";
import HighlighterCard from "./components/dashboard/HighlighterCard";

export default function Dashboard() {
  // TODO: try <AdminLayout> CONTENT HERE </AdminLayout>
  return (
    <AdminLayout>
      {/* MAIN CONTENT    */}
      <div className="ui four stackable cards">
        {[1, 2, 3, 4].map((i) => {
          // { cardLabel, cardContent, contentClasses, linkLabel, linkUrl }
          return (
            <HighlighterCard
              key={"key-" + i}
              config={{
                cardLabel: "New Order",
                cardContent: 45,
                contentClasses: "teal-text",
                linkLabel: "View Order",
                linkUrl: null,
              }}
            />
          );
        })}
      </div>

      <div className="ui four stackable cards">
        {/* TODO: Merge with Highlighter Card */}
        {[1, 2, 3, 4].map((i) => {
          return (
            <HighlighterCard
              key={"key-" + i}
              config={{
                cardLabel: "Monthly Sell",
                cardContent: "$45K",
                contentClasses: "green-text",
                linkLabel: "View Orders",
              }}
            />
          );
        })}
      </div>

      <table className="ui celled table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Name">James</td>
            <td data-label="Age">24</td>
            <td data-label="Job">Engineer</td>
          </tr>
          <tr>
            <td data-label="Name">Jill</td>
            <td data-label="Age">26</td>
            <td data-label="Job">Engineer</td>
          </tr>
          <tr>
            <td data-label="Name">Elyse</td>
            <td data-label="Age">24</td>
            <td data-label="Job">Designer</td>
          </tr>
        </tbody>
      </table>
    </AdminLayout>
  );
}
