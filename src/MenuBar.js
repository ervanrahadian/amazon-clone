import React from "react";
import "./MenuBar.css";

function MenuBar() {
  return (
    <div className="menubar">
      <div className="menubar_list">
        <span className="menubar_SingleLine">Today's Deals</span>
        <span className="menubar_SingleLine">Customer Service</span>
        <span className="menubar_SingleLine">Gift Cards</span>
        <span className="menubar_SingleLine">Registry</span>
        <span className="menubar_SingleLine">Sell</span>
      </div>
      <div className="menubar_end">
        <span className="menubar_SingleLineEnd">
          Amazon's response to COVID-19
        </span>
      </div>
    </div>
  );
}

export default MenuBar;
