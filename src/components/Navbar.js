import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ icon, title, linkto }) {
  return (
    <div style={{ background: "#ECE6F0", padding:"15px"}}>
      <Link to={linkto} className="text-decoration-none text-dark">
        <div className="">
          <img src={icon} alt="icon" width="14px" height="14px" className="me-3"/>
          <span style={{ fontSize: "17px", fontWeight: "400" }}>{title}</span>
        </div>
      </Link>
    </div>
  );
}
