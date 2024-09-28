import React, { useContext } from "react";
import bgImage from "../../../assets/menu1.jpg";
import "./bookingheader.css";
import { BookingContext } from "../BookingContext";
import {
  getDateFormat,
  getTimeFormat,
} from "../../../components/date-format/date-format";

function BookingHeader() {
  const context = useContext(BookingContext);
  if (!context) {
    return null;
  }
  const { isBookingConfirm, bookingInfoData, customerInfoData } = context;

  return (
    <section id="booking-header" style={{ backgroundImage: `url(${bgImage})` }}>
      <div id="booking-header-container">
        <h1>{isBookingConfirm ? "Booking Confirmed" : "Table Reservation"}</h1>
        <p id="booking-header-datetime">
          {bookingInfoData?.bookingDate !== "" &&
            bookingInfoData?.bookingTime !== "" && (
              <>
                {getDateFormat(bookingInfoData?.bookingDate)} at{" "}
                {getTimeFormat(bookingInfoData?.bookingTime)}
              </>
            )}
        </p>
        <p>
          {bookingInfoData?.numberPax !== 0 && (
            <>For {bookingInfoData?.numberPax} Pax </>
          )}
        </p>
        <p>Little Lemon Chicago</p>
      </div>
    </section>
  );
}

export default BookingHeader;
