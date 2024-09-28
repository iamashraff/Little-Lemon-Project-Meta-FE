import React, { useContext } from "react";
import Input from "../../../../components/input/InputForm";
import { BookingContext } from "../../BookingContext";
import ErrorMessage from "../../../../components/errormessage/ErrorMessage";

function BookingInfo() {
  const context = useContext(BookingContext);
  if (!context) {
    return null;
  }
  const { bookingInfoData, setBookingInfoData } = context;

  async function handleBookingDateChange(e: any) {
    setBookingInfoData((prevData) => ({
      ...prevData,
      bookingDate: e.target.value,
    }));
  }

  async function handleBookingTimeChange(e: any) {
    setBookingInfoData((prevData) => ({
      ...prevData,
      bookingTime: e.target.value,
    }));
  }

  async function handlePaxChange(e: any) {
    setBookingInfoData((prevData) => ({
      ...prevData,
      numberPax: parseInt(e.target.value),
    }));
  }

  return (
    <div>
      <h3>
        <b>Booking Information</b>
      </h3>
      <p>
        <b>Booking date:</b>
        <Input
          type="date"
          placeholder="Enter your booking date"
          onChange={handleBookingDateChange}
        ></Input>
        <ErrorMessage data={bookingInfoData?.bookingDate} />
      </p>
      <p>
        <b>Booking time:</b>
        <Input
          type="time"
          placeholder="Enter your booking time"
          onChange={handleBookingTimeChange}
        ></Input>
        <ErrorMessage data={bookingInfoData?.bookingTime} />
      </p>
      <p>
        <b>Number of pax:</b>
        <Input
          type="number"
          placeholder="Your pax number"
          onChange={handlePaxChange}
        ></Input>
        <ErrorMessage data={bookingInfoData?.numberPax} />
      </p>
    </div>
  );
}

export default BookingInfo;
