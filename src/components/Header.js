import React from "react";
import earth from "../images/earth.png";
export default function Header() {
  return (
    <>
      <nav className="nav">
        <img src={earth} className="nav-image" />
        <h2>Tembea Kenya leo</h2>
      </nav>
    </>
  );
}
