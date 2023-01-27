import React from "react";
import MenuItem from "./MenuItem/MenuItem";
import { useSelector } from "react-redux";

export default function Menu() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="menu">
      {favorites.data.length === 0 && (
        <div className="menu-item menu-empty">No tienes personajes favoritos</div>
      )}
      {favorites.data.length !== 0 &&
        favorites.data.map((favorite, index) => {
          return <MenuItem favorite={favorite} key={index} />;
        })}
    </div>
  );
}
