import React from "react";
import token from "./Images/Token.png";
import bronze from "./Images/Bronze.png";
import earn from "./Images/Earn.png";
import arrow from "./Images/Vector.png";
import gittbox from "./Images/gittbox.png";
import ellipse3 from "./Images/Ellipse 3.png";
import ellipse1 from "./Images/Ellipse 1.png";
import { Link } from "react-router-dom";
export default function RewardsHome({ username, tickets }) {
  const mobileStyles = {
    // backgroundColor: '#f9f9f9',
    // textAlign: 'center',
    padding: "20px",
  };

  const welcomeStyles = {
    fontSize: "18px",
    color: "#1D1B20",
    marginBottom: "20px",
    lineHeight: "24px",
    fontWeight: "400",
  };

  const userStyles = {
    fontSize: "24px",
    fontWeight: "600",
    color: "#1D1B20",
    lineHeight: "32px",
  };

  const boxStyles = {
    border: "2px solid var(--Schemes-Primary, #65558F)",
    padding: "15px 20px 15px 10px",
    marginBottom: "20px",
    borderRadius: "15px",
    // boxShadow: "10px 0 15px -5px var(--Schemes-Primary, rgba(255, 105, 180, 0.5)), -10px 0 15px -5px var(--Schemes-Primary, rgba(255, 105, 180, 0.5))", // Shadow on left and right only
  };

  const earnboxStyles = {
    width: "160px",
    height: "100px",
    backgroundColor: "#ECE6F0",
    borderRadius: "15px",
    padding: "20px",
    alignItems: "center",
  };

  const iconStyles = {
    width: "60px",
    height: "55px",
    margin: "5px",
  };
  const progressboxStyles = {
    width: "345px",
    height: "100px",
    backgroundColor: "#ECE6F0",
    borderRadius: "25px",
    padding: "15px",
    gap: "10px",
    lineHeight: "20px",
  };
  const progressBarContainer = {
    width: "198px",
    height: "8px",
    background: "#CD7F324D",
    borderRadius: "40px",
    overflow: "hidden",
    marginTop: "5px",
  };

  const progressBar = {
    width: "10%",
    height: "100%",
    backgroundColor: "#4caf50",
    transition: "width 0.3s ease",
  };

  const desktopMessageStyles = {
    textAlign: "center",
    padding: "50px",
    color: "#ff5722",
    fontSize: "20px",
    backgroundColor: "#f0f0f0",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  // Detect screen size dynamically
  const isMobile = window.innerWidth < 768;

  return (
    <div>
      {isMobile ? (
        <div style={mobileStyles}>
          {/* Welcome Message */}
          <h2 style={welcomeStyles}>Hello,</h2>
          <h2 style={userStyles}>{username} John Wick</h2>

          {/* Ticket Box */}
          {/* <div style={boxStyles}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <img src={token} alt="no-token" style={iconStyles} />
                <img src={bronze} alt="no-bronze" style={iconStyles} />
              </div>
              <span
                style={{
                  fontSize: "24px",
                  color: "#65558F",
                  fontWeight: "600",
                }}
              >
                20{" "}
                <span
                  style={{
                    color: "#1D1B20",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  Tks
                </span>
                <p
                  style={{
                    fontSize: "12px",
                    lineHeight: "18px",
                    fontWeight: "600",
                    color: "#1D1B20",
                  }}
                >
                  Equals $1
                </p>
              </span>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <img src={ellipse3} alt="no-ellipse" width="120px" height="150px"/>
            <img src={ellipse1} alt="no-ellipse" width="120px" height="150px"/>

          </div> */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={boxStyles}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <img src={token} alt="no-token" style={iconStyles} />
                  <img src={bronze} alt="no-bronze" style={iconStyles} />
                </div>
                <span
                  style={{
                    fontSize: "24px",
                    color: "#65558F",
                    fontWeight: "600",
                  }}
                >
                  20{" "}
                  <span
                    style={{
                      color: "#1D1B20",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    Tks
                  </span>
                  <p
                    style={{
                      fontSize: "12px",
                      lineHeight: "18px",
                      fontWeight: "600",
                      color: "#1D1B20",
                    }}
                  >
                    Equals $1
                  </p>
                </span>
              </div>
            </div>

            {/* Images that will overlap the first div */}
            <div
              className="d-flex justify-content-between"
              style={{
                position: "absolute",
                top: "50%", // Adjust this value to vertically center the images
                left: 0,
                right: 0,
                transform: "translateY(-50%)", // Center the images vertically
                zIndex: 0,
                pointerEvents: "none", // Prevent mouse events on images
              }}
            >
              <img
                src={ellipse3}
                alt="no-ellipse"
                width="150px"
                height="220px"
                style={{ marginLeft: "-60px" }} // Negative margin to push image out left
              />
              <img
                src={ellipse1}
                alt="no-ellipse"
                width="150px"
                height="220px"
                style={{ marginRight: "-60px" }} // Negative margin to push image out right
              />
            </div>
          </div>

          {/* Earn and Redeem Boxes */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "20px",
            }}
          >
            <div style={earnboxStyles}>
              <div
                className="d-flex justify-content-between"
                style={{ padding: "9px 7px 9px 7px", gap: "10px" }}
              >
                <div>
                  <img src={earn} alt="no-earn" />
                  <p
                    style={{
                      color: "#000000",
                      fontSize: "14px",
                      fontWeight: "600",
                      lineHeight: "21px",
                    }}
                  >
                    Earn
                  </p>
                </div>
                <div>
                  <img src={arrow} alt="no-arrow" />
                </div>
              </div>
            </div>
            <div style={earnboxStyles}>
              <div
                className="d-flex justify-content-between"
                style={{ padding: "9px 7px 9px 7px", gap: "10px" }}
              >
                <div>
                  <img src={gittbox} alt="no-gittbox" />
                  <p
                    style={{
                      color: "#000000",
                      fontSize: "14px",
                      fontWeight: "600",
                      lineHeight: "21px",
                    }}
                  >
                    Redeem
                  </p>
                </div>
                <div>
                  <img src={arrow} alt="no-arrow" />
                </div>
              </div>
            </div>
          </div>

          {/* Progress Box */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <Link to="/tier" style={{ textDecoration: "none" }}>
              <div style={progressboxStyles}>
                <div className="d-flex align-items-center justify-content-between">
                  <div
                    className="d-flex text-center"
                    style={{ lineHeight: "1px" }}
                  >
                    <img src={bronze} alt="no-bronze" style={iconStyles} />
                    <div style={{ marginLeft: "10px" }}>
                      <p
                        style={{
                          color: "#000000",
                          fontSize: "14px",
                          fontWeight: "600",
                          lineHeight: "21px",
                        }}
                      >
                        Bronze
                      </p>
                      <p
                        style={{
                          color: "#1D1B2099",
                          fontWeight: "400",
                          fontSize: "12px",
                        }}
                      >
                        980 tks to silver
                      </p>
                      <div style={progressBarContainer}>
                        <div style={progressBar}></div>
                      </div>
                    </div>
                  </div>

                  {/* Right side (arrow) */}
                  <img src={arrow} alt="no-arrow" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        // Desktop and Tablet Message
        <div style={desktopMessageStyles}>
          <p>This page is only viewable on mobile devices.</p>
          <p>Please switch to a mobile device to view your rewards.</p>
        </div>
      )}
    </div>
  );
}
