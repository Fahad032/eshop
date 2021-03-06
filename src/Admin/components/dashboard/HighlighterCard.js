import React from "react";
import { Link } from "react-router-dom";

export default function HighlighterCard(props) {
  const {
    cardLabel,
    cardContent,
    contentClasses,
    linkLabel,
    linkUrl,
  } = props.config;
  let cardContentClasses = [
    "center",
    "aligned",
    "description",
    "number-highlights",
  ];
  let applicableContentClass = cardContentClasses
    .concat(contentClasses)
    .join(" ");

  return (
    <div className="ui fluid card">
      <div className="content">
        <div className="header">{cardLabel || "Default Label"}</div>
        <div className={applicableContentClass}>{cardContent || "Default"}</div>
      </div>
      <div className="extra content">
        <Link to={linkUrl}>
          <button className="ui primary fluid button">
            {linkLabel || "Default View"}
          </button>
        </Link>
      </div>
    </div>
  );
}
