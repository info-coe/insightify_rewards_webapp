import React from "react";
import illustration from "./Images/Illustration.png";
import Discounts from "./Images/Discounts.png";
import offers from "./Images/Offers.png";
import subscriptions from "./Images/subscriptions.png";
import logo from "./Images/Logo.png";
import { Link } from "react-router-dom";

export default function RewardsIntro() {
  const mobile = {
    display: "block",
    textAlign: "center",
  };
  // eslint-disable-next-line
  const hiddenOnDesktop = {
    display: "none",
  };
  const desktopMessage = {
    display: "block",
    textAlign: "center",
    padding: "50px",
    color: "#ff5722",
    fontSize: "20px",
    height: "100vh",
  };
  const introheading = {
    fontSize: "16px",
    color: "#1D1B20CC",
  };
  const rewardheading = {
    fontSize: "24px",
    lineHeight: "20px",
    color: "#65558F",
  };
  const rewardImage = {
    width: "100%",
  };
  const logimg = {
    width: "40px",
    height: "39px",
    borderRadius: "100px",
    marginTop: "20px",
  };
  const button = {
    backgroundColor: "#65558F",
    color: "white",
    border: "none",
    borderRadius: "100px",
    cursor: "pointer",
    fontSize: "14px",
    padding: "15px 50px 15px 50px",
  };
  const link = {
    color: "white",
    textDecoration: "none",
  };
  const offerText = {
    display: "block",
    marginTop: "25px",
    fontSize: "16px",
    color: "#000000",
  };
  const rewardDescription = {
    fontSize: "16px",
    color: "#1D1B20",
    lineHeight: "24px",
  };
  const BenefitsImg = {
    width: "150px",
    height: "87px",
    marginTop: "35px",
  };
  const Benefitscontent = {
    fontSize: "16px",
    lineHeight: "20px",
    color: "#000000",
  };

  const isMobile = window.innerWidth < 768;

  return (
    <div>
      <>
        {isMobile ? (
          <div style={mobile}>
            <div>
              <img src={logo} alt="no-logo" style={logimg} />
              <h5 style={introheading}>Introducing</h5>
              <h3 style={rewardheading}>Insightify Rewards</h3>
              <img src={illustration} alt="illustration" style={rewardImage} />
              <p style={rewardDescription}>
                Unlock more rewards and exclusive offers with Insightify
                Rewards!
              </p>
              <Link to="/login" style={link}>
                <button style={button}>Get started</button>
              </Link>
              <span style={offerText}>
                <b>Discover Our Benefits</b>
              </span>
            </div>
            <div>
              <img src={Discounts} alt="illustration" style={BenefitsImg} />
              <p style={Benefitscontent}>
                Enjoy more discounts with every order you place!
              </p>
              <img src={offers} alt="offers" style={BenefitsImg} />
              <p style={Benefitscontent}>
                Get more offers tailored to your orders!
              </p>
              <img
                src={subscriptions}
                alt="subscriptions"
                style={BenefitsImg}
              />
              <p style={Benefitscontent}>
                Unlock access to our exclusive membership!
              </p>
            </div>
          </div>
        ) : (
          <div style={desktopMessage}>
            <p>
              This page is only viewable on mobile devices. Please switch to a
              mobile device to view your rewards.
            </p>
          </div>
        )}
      </>
    </div>
  );
}
