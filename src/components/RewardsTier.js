import React from "react";
import navigateBack from "./Images/Back.png";
import tiersImage from "./Images/Group17.png";
import Navbar from "./Navbar";
import tierLogo from "./Images/Token.png";

export default function RewardsTier() {
  return (
    <div>
      <Navbar
        icon={navigateBack}
        title="Insightify Tiers"
        linkto="/rewardshome"
      />
      <div style={{ padding: "58px 15px 0px 15px", textAlign: "center" }}>
        <h4 style={{ fontSize: "21px", fontWeight: "600", lineHeight: "27px" }}>
          Welcome to Insightify Tiers!
        </h4>
        <p style={{ fontSize: "16px", fontWeight: "400", lineHeight: "21px" }}>
          Unlock exclusive rewards and benefits as you progress through our
          membership levels.
        </p>
        <div style={{ margin: "80px 0px" }}>
          <img src={tiersImage} alt="Tiers" />
        </div>
        <div>
          <img src={tierLogo} alt="" style={{margin:"10px 6px"}}></img>
          <p style={{fontSize:"16px", fontWeight:"400", lineHeight:"21px"}}>
            980 <span style={{fontSize:"16px", fontWeight:"600", lineHeight:"21px"}}>tks to silver</span>
          </p>
        </div>
      </div>
    </div>
  );
}
