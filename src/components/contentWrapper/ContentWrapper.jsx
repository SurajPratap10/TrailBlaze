import React from "react";

import "./style.scss";

const ContentWrapper = ({ children }) => {
  return (
    <div //Aligns center the CONTENT (Kind of Media Query)
      className="contentWrapper"
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
