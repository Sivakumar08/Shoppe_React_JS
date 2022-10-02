import React from "react";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./Foot1.css";

function Foot1() {
  return (
    <div className="Foot1">
      <h3>Shoppe</h3>
      <div className="Footc">
        <p>
          <MdOutlineFacebook />
        </p>
        <p>
          <FaInstagram />
        </p>
        <p>
          <FaTwitter />
        </p>
      </div>
    </div>
  );
}

export default Foot1;
