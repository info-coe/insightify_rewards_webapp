import React, { useRef } from "react";

export default function RewardsOtpVerification() {
  const mobileStyles = {
    display: "block",
    padding: "20px",
    textAlign: "center",
  };

  const desktopMessageStyles = {
    display: "block",
    textAlign: "center",
    padding: "50px",
    color: "#ff5722",
    fontSize: "20px",
    backgroundColor: "#f0f0f0",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  const isMobile = window.innerWidth < 768;

  const otpRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

  const handleChange = (e, index) => {
    if (e.target.value.length === 1 && index < 5) {
      otpRefs[index + 1].current.focus();
    }

    if (e.key === "Backspace" && index > 0 && e.target.value.length === 0) {
      otpRefs[index - 1].current.focus();
    }
  };

  return (
    <div>
      {isMobile ? (
        <div style={mobileStyles}>
          <h2
            style={{ fontSize: "18px", color: "#1D1B20", lineHeight: "27px" }}
          >
            Verify Your Identity with OTP
          </h2>
          <p style={{ fontSize: "14px", color: "#1D1B20", lineHeight: "21px" }}>
            Enter the one-time password (OTP) sent to your registered mobile
            number to proceed.{" "}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems:"center",
              gap: "10px",
            }}
          >
            {otpRefs.map((ref, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                ref={ref}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleChange(e, index)}
                style={{
                  width: "40px",
                  height: "60px",
                  border: "1px solid #ccc",
                  fontSize:"18px",
                  borderRadius: "10px",
                  background: "#ECE6F0",
                  lineHeight:"24px",
                  textAlign:"center"
                }}
              />
            ))}
          </div>

          {/* Button */}
          <button
            style={{
              padding: "15px 50px 15px 50px",
              backgroundColor: "#65558F",
              color: "white",
              border: "none",
              borderRadius: "100px",
              marginTop: "20px",
            }}
          >
            Verify OTP
          </button>
        </div>
      ) : (
        // Desktop and Tablet Message
        <div style={desktopMessageStyles}>
          <p>This page is only viewable on mobile devices.</p>
          <p>Please switch to a mobile device to verify your OTP.</p>
        </div>
      )}
    </div>
  );
}
