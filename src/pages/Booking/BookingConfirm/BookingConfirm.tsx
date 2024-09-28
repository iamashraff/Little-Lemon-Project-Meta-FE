import React from "react";
import "./bookingconfirm.css";
import Lottie from "react-lottie";
import successAnimation from "../../../assets/bookingsuccess.json";
import ButtonMain from "../../../components/button/ButtonMain";
import { useNavigate } from "react-router-dom";

function BookingConfirm() {
  const navigate = useNavigate();

  const handleNavigateConfirm = () => {
    navigate("/");
  };
  function generateBookingID(length: number) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Allowed characters
    let randomID = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomID += characters[randomIndex]; // Append a random character
    }

    return randomID;
  }

  const animationOptions = {
    loop: false,
    autoplay: true,

    animationData: successAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div id="booking-confirm">
      <Lottie options={animationOptions} height={140} width={140} />
      <h3>Your booking has been confirmed</h3>
      <p>Booking ID: {generateBookingID(10)}</p>
      <p>Thank you for choosing Little Lemon !</p>
      <ButtonMain style={{ marginTop: "14px" }} onClick={handleNavigateConfirm}>
        OK
      </ButtonMain>
    </div>
  );
}

export default BookingConfirm;
