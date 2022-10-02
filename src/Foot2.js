import React from "react";
import "./Foot2.css";
import database from "../../firebase";
import  {useState, useEffect } from 'react';

function Foot2() {

  const [email , setEmail] = useState();
      
// Push Function
  const Push = () => {
  database.ref("user").set({
   
    email: email,
  }).catch(alert);
}
  return (

    
    <div className="Footd">
      <div className="Foota">
        
          <div className="Foot2">
            <h5>Company Info</h5>
            <div className="In">
              {" "}
              <p>About Us</p>
              <p>Carrier</p>
              <p>We are hiring</p>
              <p>Blog</p>
            </div>
          </div>
          <div className="Foot2">
            <h5>Legal</h5>
            <div className="In">
              <p>About Us</p>
              <p>Carrier</p>
              <p>We are hiring</p>
              <p>Blog</p>
            </div>
          </div>
          <div className="Foot2">
            <h5>Features</h5>
            <div className="In">
              <p>Business Marketing</p>
              <p>User Analytic</p>
              <p>Live Chat</p>
              <p>Unlimited Support</p>
            </div>
          </div>
          <div className="Foot2">
            <h5>Resources</h5>
            <div className="In">
              {" "}
              <p>IOS & ANDROID</p>
              <p>Watch a Demo</p>
              <p>Customers</p>
              <p>API</p>
            </div>
          </div>
          <div className="Foot2">
            <h5>Get In Touch</h5>
            <div className="Button">
              <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
              <button onClick={Push}>Subscribe</button>
            </div>
          </div>
        </div>
     
    </div>
  );
}

export default Foot2;
