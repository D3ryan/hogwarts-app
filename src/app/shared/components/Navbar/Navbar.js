import React from "react";
import Menu from "./Menu/Menu";
import Nav from "./Nav/Nav";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <Menu/>
      <Nav/>
    </div>
  );
}
