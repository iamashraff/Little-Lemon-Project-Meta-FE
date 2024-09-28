import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingInfo from "./BookingInfo";
import { BookingContext } from "../../BookingContext";

const mockSetBookingInfoData = jest.fn();
const mockContext = {
  bookingInfoData: {
    bookingDate: "",
    bookingTime: "",
    numberPax: 0,
  },
  setBookingInfoData: mockSetBookingInfoData,
  customerInfoData: {
    customerFName: "",
    customerLName: "",
    emailAddress: "",
  },
  setCustomerInfoData: jest.fn(),
  attemptBooking: false,
  setAttemptBooking: jest.fn(),
  isBookingConfirm: false,
  setIsBookingConfirmed: jest.fn(),
};

describe("BookingInfo", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders all input fields", () => {
    render(
      <BookingContext.Provider value={mockContext}>
        <BookingInfo />
      </BookingContext.Provider>
    );

    expect(
      screen.getByPlaceholderText("Enter your booking date")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your booking time")
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your pax number")).toBeInTheDocument();
  });

  it("calls setBookingInfoData when booking date changes", () => {
    render(
      <BookingContext.Provider value={mockContext}>
        <BookingInfo />
      </BookingContext.Provider>
    );

    const dateInput = screen.getByPlaceholderText("Enter your booking date");
    fireEvent.change(dateInput, { target: { value: "2023-05-01" } });

    expect(mockSetBookingInfoData).toHaveBeenCalledWith(expect.any(Function));
  });

  it("calls setBookingInfoData when booking time changes", () => {
    render(
      <BookingContext.Provider value={mockContext}>
        <BookingInfo />
      </BookingContext.Provider>
    );

    const timeInput = screen.getByPlaceholderText("Enter your booking time");
    fireEvent.change(timeInput, { target: { value: "14:00" } });

    expect(mockSetBookingInfoData).toHaveBeenCalledWith(expect.any(Function));
  });

  it("calls setBookingInfoData when number of pax changes", () => {
    render(
      <BookingContext.Provider value={mockContext}>
        <BookingInfo />
      </BookingContext.Provider>
    );

    const paxInput = screen.getByPlaceholderText("Your pax number");
    fireEvent.change(paxInput, { target: { value: "4" } });

    expect(mockSetBookingInfoData).toHaveBeenCalledWith(expect.any(Function));
  });

  it("renders ErrorMessage components", () => {
    render(
      <BookingContext.Provider value={mockContext}>
        <BookingInfo />
      </BookingContext.Provider>
    );

    const errorMessages = screen.getAllByText("Please fill in this field");
    expect(errorMessages).toHaveLength(3);
  });
});
