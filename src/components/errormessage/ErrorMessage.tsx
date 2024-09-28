import React, { useContext } from "react";
import { BookingContext } from "../../pages/Booking/BookingContext";
import "./errormessage.css";

function ErrorMessage({ data }: any) {
  const context = useContext(BookingContext);
  if (!context) {
    return null;
  }
  const { attemptBooking } = context;

  return (
    <>
      {attemptBooking && (data === "" || data === 0 || data === null) && (
        <span id="error-message-span">Please fill in this field</span>
      )}
    </>
  );
}

export default ErrorMessage;
