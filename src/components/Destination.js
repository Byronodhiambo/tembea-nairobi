import React from "react";
// import David from "images/David.jpg";
// import Nairobi from "images/Nairobi.jpg";
// import Giraffe from "images/Giraffe.jpg";
// import Karura from "images/Karura.jpg";
// import Karen from "images/Karen.jpg";

export default function Destination(props) {
  return (
    <>
      <div className="destination">
        <div className="destination-card">
          <div className="dest-image-bx">
            <img src={props.image} className="destination-image" />
          </div>
          <div>
            <div className="location">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <p>{props.location}</p>
            </div>
            <h1>{props.name}</h1>
            <p className="description">{props.description}</p>
          </div>
        </div>
        <hr className="hr" />
      </div>
    </>
  );
}
