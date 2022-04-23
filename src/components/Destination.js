import React from "react";
import david from "../images/earth.png";

export default function Destination() {
  return (
    <>
      <div className="destination">
        <img src={david} className="destination-image" />
        <div>
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          <p>Nairobi central</p>
          <h1>
            <p>David Sheldrick Wildlife Trust </p>
          </h1>
          <p className="description">
            “The Sheldrick Wildlife Trust embraces all measures that complement
            the conservation, preservation and protection of wildlife. These
            include anti-poaching, safe guarding the natural environment,
            enhancing community awareness, addressing animal welfare issues,
            providing veterinary assistance to animals in need, rescuing and
            hand rearing elephant and rhino orphans, along with other species
            that can ultimately enjoy a quality of life in wild terms when
            grown.”[1] The Sheldrick Wildlife Trust works closely with the Kenya
            Wildlife Service, the Kenya Forest Service and local communities to
            achieve their long term goal to secure safe havens for wildlife,
            through the effective management and protection of key ecosystems
            and wilderness areas in Kenya.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
