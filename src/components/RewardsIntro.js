import React from "react";
import illustration from "./Images/Illustration.png";
import Discounts from "./Images/Discounts.png";
import offers from "./Images/Offers.png";
import subscriptions from "./Images/subscriptions.png";
import logo from "./Images/Logo.png";
import { Link } from "react-router-dom";

export default function RewardsIntro() {
  const styles = {
    mobile: {
      display: "block",
      textAlign: "center",
    },
    hiddenOnDesktop: {
      display: "none",
    },
    desktopMessage: {
      display: "block",
      textAlign: "center",
      padding: "50px",
      color: "#ff5722",
      fontSize: "20px",
      height: "100vh",
    },
    introheading: {
      fontSize: "16px",
      color: "#1D1B20CC",
    },
    rewardheading: {
      fontSize: "24px",
      lineHeight: "20px",
      color: "#65558F",
    },
    rewardImage: {
      width: "100%",
    },
    logimg: {
      width: "40px",
      height: "39px",
      borderRadius: "100px",
      marginTop: "20px",
    },
    button: {
      backgroundColor: "#65558F",
      color: "white",
      border: "none",
      borderRadius: "100px",
      cursor: "pointer",
      fontSize: "14px",
      padding: "15px 50px 15px 50px",
    },
    link: {
      color: "white",
      textDecoration: "none",
    },
    offerText: {
      display: "block",
      marginTop: "25px",
      fontSize: "16px",
      color: "#000000",
    },
    rewardDescription: {
      fontSize: "16px",
      color: "#1D1B20",
      lineHeight: "24px",
    },
    BenefitsImg: {
      width: "150px",
      height: "87px",
      marginTop: "35px",
    },
    Benefitscontent: {
      fontSize: "16px",
      lineHeight: "20px",
      color: "#000000",
    },
  };

  const isMobile = window.innerWidth < 768;

  return (
    <div>
      <>
        {isMobile ? (
          <div style={styles.mobile}>
            <div>
              <img src={logo} alt="no-logo" style={styles.logimg} />
              <h5 style={styles.introheading}>Introducing</h5>
              <h3 style={styles.rewardheading}>Insightify Rewards</h3>
              <img
                src={illustration}
                alt="illustration"
                style={styles.rewardImage}
              />
              <p style={styles.rewardDescription}>
                Unlock more rewards and exclusive offers with Insightify
                Rewards!
              </p>
              <Link to="/login" style={styles.link}>
                <button style={styles.button}>Get started</button>
              </Link>
              <span style={styles.offerText}>
                <b>Discover Our Benefits</b>
              </span>
            </div>
            <div>
              <img
                src={Discounts}
                alt="illustration"
                style={styles.BenefitsImg}
              />
              <p style={styles.Benefitscontent}>
                Enjoy more discounts with every order you place!
              </p>
              <img src={offers} alt="offers" style={styles.BenefitsImg} />
              <p style={styles.Benefitscontent}>
                Get more offers tailored to your orders!
              </p>
              <img
                src={subscriptions}
                alt="subscriptions"
                style={styles.BenefitsImg}
              />
              <p style={styles.Benefitscontent}>
                Unlock access to our exclusive membership!
              </p>
            </div>
          </div>
        ) : (
          <div style={styles.desktopMessage}>
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
