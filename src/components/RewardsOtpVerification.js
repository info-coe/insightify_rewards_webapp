import React, { useEffect, useRef, useState } from "react";
import navigateBack from "./Images/Back.png";
import Navbar from "./Navbar";
import { auth } from "../Firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useLocation } from "react-router-dom";

export default function RewardsOtpVerification() {
  const location = useLocation();
  const values = location.state;
  console.log(values);
  const [phoneNumber, setPhoneNumber] = useState(values.phone || "");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [verificationId, setVerificationId] = useState(null);
  const [message, setMessage] = useState("");

  const mobileStyles = {
    display: "block",
    padding: "20px",
  };

  const desktopMessageStyles = {
    display: "block",
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

  const handleKeyDown = (e, index) => {
    // Handle backspace key
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = ""; // Clear the current input value
      setOtp(newOtp);

      // Move focus to the previous input if the current input is empty
      if (index > 0 && otp[index] === "") {
        otpRefs[index - 1].current.focus();
      }
    }
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    const newOtp = [...otp];

    // Set the value of the current index in the OTP array
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input if the current input has a value
    if (value.length === 1 && index < 5) {
      otpRefs[index + 1].current.focus();
    }
  };

  // const setupRecaptcha = () => {
  //   window.recaptchaVerifier = new RecaptchaVerifier(
  //     auth,
  //     "recaptcha-container",
  //     {
  //       size: "invisible",
  //       callback: (response) => {
  //         // reCAPTCHA solved
  //       },
  //     }
  //   );
  // };

  const handleSendOtp = async () => {
    // setupRecaptcha();
    // const appVerifier = window.recaptchaVerifier;
    var applicationVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved
        },
      }
    );
    // firebase
    //   .auth()
    //   .signInWithPhoneNumber(phoneNumber, applicationVerifier)
    //   .then(function (confirmationResult) {
    //     setVerificationId(confirmationResult.verificationId);
    //     setMessage("OTP sent to your phone!");
    //     // return confirmationResult.confirm(verificationCode);
    //   })
    //   .catch(function (error) {
    //     // Handle Errors here.
    //     console.error("Error during signInWithPhoneNumber", error);
    //     setMessage("Failed to send OTP");
    //   });

    try {
      const verificationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        applicationVerifier
      );
      setVerificationId(verificationResult.verificationId);
      setMessage("OTP sent to your phone!");
    } catch (error) {
      console.error("Error during signInWithPhoneNumber", error);
      setMessage("Failed to send OTP");
    }
  };

  useEffect(() => {
    if (
      phoneNumber !== "" ||
      phoneNumber !== null ||
      phoneNumber !== undefined
    ) {
      handleSendOtp();
    }
  }, []);

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const combinedOtp = otp.join("");
    try {
      const credential = auth.PhoneAuthProvider.credential(
        verificationId,
        combinedOtp
      );
      await auth.signInWithCredential(credential);
      setMessage("Phone number verified successfully!");
    } catch (error) {
      console.error("Error during OTP verification", error);
      setMessage("Failed to verify OTP");
    }
  };

  return (
    <div>
      <Navbar icon={navigateBack} title="OTP verification" linkto="/login" />
      {isMobile ? (
        <div style={mobileStyles}>
          <h2
            style={{
              fontSize: "21px",
              color: "#1D1B20",
              lineHeight: "27px",
              fontWeight: "600",
            }}
          >
            Verify Your Identity with OTP
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#1D1B20",
              lineHeight: "21px",
              fontWeight: "400",
            }}
          >
            Enter the one-time password (OTP) sent to your registered mobile
            number to proceed.{" "}
          </p>
          <div id="recaptcha-container"></div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {otpRefs.map((ref, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                ref={ref}
                value={otp[index]}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                style={{
                  width: "40px",
                  height: "60px",
                  border: "1px solid #ccc",
                  fontSize: "18px",
                  borderRadius: "10px",
                  background: "#ECE6F0",
                  lineHeight: "24px",
                  textAlign: "center",
                }}
              />
            ))}
          </div>

          {/* Button */}
          <div style={{ textAlign: "center" }}>
            <button
              style={{
                padding: "15px 50px 15px 50px",
                backgroundColor: "#65558F",
                color: "white",
                border: "none",
                borderRadius: "100px",
                marginTop: "20px",
              }}
              onClick={handleVerifyOtp}
            >
              Verify OTP
            </button>
          </div>
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
