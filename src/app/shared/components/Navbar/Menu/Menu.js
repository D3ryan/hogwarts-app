import React from "react";
import './Menu.scss';
import MenuItem from "./MenuItem/MenuItem";

export default function Menu() {
  return (
    <div className="menu">
      <MenuItem/>
      {/* <MenuItem/>
      <MenuItem/> */}
    </div>
  );
}
