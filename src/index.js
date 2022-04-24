import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import reportWebVitals from "./reportWebVitals";
import Destination from "./components/Destination";
import DestinationData from "./components/DestinationData";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
const destination = DestinationData.map((dest) => {
  return (
    <Destination
      image={dest.image}
      location={dest.location}
      name={dest.name}
      description={dest.description}
    />
  );
});
root.render(
  <>
    <Header />
    <div className="main-content"></div>
    {destination}
    <Footer />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
