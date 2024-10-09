import React, { useState } from 'react'
import navigateBack from "./Images/Back.png";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';

export default function RewardsCreateAccount() {
  const [values, setValues] = useState({
    name: "",
    email: ""
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
    alert(values);
  };
  return (
    <div>
      <Navbar icon={navigateBack} title="Create account" linkto="/" />
      <div style={{ padding: "25px 15px 0px 15px" }}>
        <h4 style={{ fontSize: "21px", fontWeight: "600", lineHeight: "27px" }}>
          Let’s set up your account
        </h4>
        <p style={{fontSize:"16px", fontWeight:"400", lineHeight:"21px"}}>
          Fill in your details to create your account and get started!
        </p>
        <form id="formdiv" onSubmit={formSubmit}>
            <div className="input-field">
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="off"
                required
                onChange={handleInput}
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-field">
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                required
                onChange={handleInput}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="text-center">
              <button id="loginBtn" type="submit">
                Create Account
              </button>
            </div>
          </form>
      </div>
    </div>
  )
}
