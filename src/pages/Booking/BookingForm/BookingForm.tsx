import React, { useContext, useState } from "react";
import { BookingContext } from "../BookingContext";
import "./bookingform.css";
import ButtonMain from "../../../components/button/ButtonMain";
import BookingInfo from "./BookingInfo/BookingInfo";
import CustomerInfo from "./CustomerInfo/CustomerInfo";
import BookingConfirm from "../BookingConfirm/BookingConfirm";

function BookingForm() {
  const context = useContext(BookingContext);
  if (!context) {
    return null;
  }
  const {
    customerInfoData,
    bookingInfoData,
    setAttemptBooking,
    isBookingConfirm,
    setIsBookingConfirmed,
  } = context;

  async function handleBookingConfirm() {
    setAttemptBooking(true);
    console.log(customerInfoData?.customerFName !== "");
    if (
      customerInfoData?.customerFName !== "" ||
      customerInfoData?.customerLName !== "" ||
      customerInfoData?.emailAddress !== "" ||
      bookingInfoData?.bookingDate !== "" ||
      bookingInfoData?.bookingTime !== "" ||
      bookingInfoData?.numberPax !== 0
    ) {
      setIsBookingConfirmed(true);
    }
  }

  return (
    <section id="booking-section">
      {isBookingConfirm ? (
        <BookingConfirm />
      ) : (
        <>
          <BookingInfo />
          <hr></hr>
          <CustomerInfo />
          <div id="submit-button-div">
            <ButtonMain onClick={handleBookingConfirm}>
              Confirm Booking
            </ButtonMain>
          </div>
        </>
      )}
    </section>
  );
}

export default BookingForm;
