import React from "react";
import earth from "../images/earth.png";
import Destination from "./Destination";
export default function Header() {
  return (
    <>
      <nav className="nav">
        <img src={earth} className="nav-image" />
        <h3>Tembea Kenya leo</h3>
      </nav>
      >
    </>
  );
}
