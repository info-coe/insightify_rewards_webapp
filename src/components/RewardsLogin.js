import React, { useState } from "react";
import Navbar from "./Navbar";
import navigateBack from "./Images/Back.png";
import { useNavigate } from "react-router-dom";

export default function RewardsLogin() {
  const [values, setValues] = useState({
    phone: ""
  });
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const formSubmit = (event) => {
    event.preventDefault();
    alert(values.phone);
  };

  return (
    <div>
      <Navbar icon={navigateBack} title="Rewards Login" linkto="/" />
      <div style={{ padding: "25px 15px 0px 15px" }}>
        <h4 style={{ fontSize: "21px", fontWeight: "600", lineHeight: "27px" }}>
          Let’s get you signed in!
        </h4>
        <p style={{fontSize:"16px", fontWeight:"400", lineHeight:"21px"}}>
          Sign in to unlock personalized offers, rewards, and exclusive benefits
          tailored just for you!
        </p>
        <form id="formdiv" onSubmit={formSubmit}>
            <div className="input-field">
              <input
                type="tel"
                id="phone"
                name="phone"
                autoComplete="off"
                pattern="[0-9]{10}"
                title="Please enter numerics only"
                minLength={10}
                maxLength={10}
                required
                onChange={handleInput}
              />
              <label htmlFor="phone">Mobile Number</label>
            </div>
            <div className="text-center">
              <button id="loginBtn" type="submit">
                Login
              </button>
            </div>
          </form>
      </div>
    </div>
  );
}
