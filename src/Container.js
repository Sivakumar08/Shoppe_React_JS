import React from "react";
import "./Cont.css";
import img1 from './images/redhead.png'

function Container() {
  return (
    <div className="Cont">
      <div className="Row">
        <div className="Cont1">
          <h5>SUMMER 2020</h5>
          <h1>NEW COLLECTION</h1>
          <div>
          <h4>
            We know how large objects will act, but things on a small scale.
          </h4>
          </div>
          <button>SHOP NOW</button>
        </div>

        <div className="Img">
        <img src={img1} alt=""/>
        <span class="dot"></span>
        <span class="dot1"></span>
        <span class="dot2"></span>
        <span class="dot3"></span>
        <span class="dot4"></span>
        </div>
      </div>
    </div>
  );
}

export default Container;
