import React from "react";
import Menu from "./Menu/Menu";
import Nav from "./Nav/Nav";
import { useSelector } from "react-redux";
import "./Navbar.scss";

export default function Navbar() {
  // console.log(favorites)
  const show = useSelector((state) => state.favorites.show);
  
  return (
    <div className="navbar">
      {show && <Menu />}
      <Nav />
    </div>
  );
}
