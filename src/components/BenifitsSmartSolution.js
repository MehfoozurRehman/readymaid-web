import React from "react";
import smartsolution from "../assets/smart solution.png";

export function BenifitsSmartSolution({}) {
  return (
    <div className="Readymaid__Smart__Solution">
      <img
        className="Readymaid__Smart__Solution_pic"
        src={smartsolution}
        alt="smartsolution"
      />
      <div className="Readymaid__Smart__Solution_overlay">
        <div className="Readymaid__Smart__Solution_overlay__heading">
          Readymaid Smart Solution
        </div>
        <div className="Readymaid__Smart__Solution_overlay__para">
          It is a unique smart solution designed to cater the needs of our
          esteemed corporate clients.
        </div>
      </div>
    </div>
  );
}
