import React from "react";
import earth from "../images/earth.png";
import Destination from "./Destination";
export default function Header() {
  return (
    <>
      <nav className="nav">
        <img src={earth} className="nav-image" />
        <h2>Tembea Nairobi leo</h2>
      </nav>
    </>
  );
}
