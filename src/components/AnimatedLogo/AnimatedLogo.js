import React from "react";
import "./AnimatedLogo.css";

export default function AnimatedLogo({alterChar = "open"}) {

  return (
    <React.Fragment>
      <span className={`animated-logo logo-${alterChar}`}>
        <span className="logo-char">{"{"}</span>
        <span className="logo-char">t</span>
        <span className={alterChar}>o</span>
        <span className={alterChar}>b</span>
        <span className={alterChar}>i</span>
        <span className={alterChar}>a</span>
        <span className={alterChar}>s</span>
        <span className={alterChar}> </span>
        <span className={`logo-${alterChar}1`}>m</span>
        <span className={alterChar}>ö</span>
        <span className={alterChar}>l</span>
        <span className={alterChar}>l</span>
        <span className={alterChar}>e</span>
        <span className={alterChar}>r</span>
        <span className={`logo-${alterChar}2`}>{"}"}</span>
      </span>
    </React.Fragment>
  );
}
