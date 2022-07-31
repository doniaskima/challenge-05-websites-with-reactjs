import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./FirstSection.css";

function FirstSection() {
  return (
    <div className="First-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>Explore our world </h1>
      <p>What are you waiting for?</p>
      <div className="First-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default FirstSection;
