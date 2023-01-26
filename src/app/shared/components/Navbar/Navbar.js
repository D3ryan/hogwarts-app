import React from "react";
import Menu from "./Menu/Menu";
import Nav from "./Nav/Nav";
import "./Navbar.scss";

export default function Navbar() {
  const favorites = {};
  return (
    <div className="navbar">
      {Object.keys(favorites).length !== 0 && <Menu />}
      <Nav />
    </div>
  );
}
