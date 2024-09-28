import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CustomerInfo from "./CustomerInfo";
import { BookingContext } from "../../BookingContext";

const mockSetCustomerInfoData = jest.fn();
const mockContext = {
  customerInfoData: {
    customerFName: "",
    customerLName: "",
    emailAddress: "",
  },
  setCustomerInfoData: mockSetCustomerInfoData,
  bookingInfoData: {
    bookingDate: "",
    bookingTime: "",
    numberPax: 0,
  },
  setBookingInfoData: jest.fn(),
  attemptBooking: false,
  setAttemptBooking: jest.fn(),
  isBookingConfirm: false,
  setIsBookingConfirmed: jest.fn(),
};

describe("CustomerInfo", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders all input fields", () => {
    render(
      <BookingContext.Provider value={mockContext}>
        <CustomerInfo />
      </BookingContext.Provider>
    );

    expect(screen.getByPlaceholderText("First Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Last Name")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Eg: contact@littlelemon.com")
    ).toBeInTheDocument();
  });

  it("calls setCustomerInfoData when first name input changes", () => {
    render(
      <BookingContext.Provider value={mockContext}>
        <CustomerInfo />
      </BookingContext.Provider>
    );

    const firstNameInput = screen.getByPlaceholderText("First Name");
    fireEvent.change(firstNameInput, { target: { value: "John" } });

    expect(mockSetCustomerInfoData).toHaveBeenCalledWith(expect.any(Function));
  });

  it("calls setCustomerInfoData when last name input changes", () => {
    render(
      <BookingContext.Provider value={mockContext}>
        <CustomerInfo />
      </BookingContext.Provider>
    );

    const lastNameInput = screen.getByPlaceholderText("Last Name");
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });

    expect(mockSetCustomerInfoData).toHaveBeenCalledWith(expect.any(Function));
  });

  it("calls setCustomerInfoData when email input changes", () => {
    render(
      <BookingContext.Provider value={mockContext}>
        <CustomerInfo />
      </BookingContext.Provider>
    );

    const emailInput = screen.getByPlaceholderText(
      "Eg: contact@littlelemon.com"
    );
    fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });

    expect(mockSetCustomerInfoData).toHaveBeenCalledWith(expect.any(Function));
  });

  it("renders ErrorMessage components for each input", () => {
    render(
      <BookingContext.Provider value={mockContext}>
        <CustomerInfo />
      </BookingContext.Provider>
    );

    const errorMessages = screen.getAllByText("Please fill in this field");
    expect(errorMessages).toHaveLength(3);
  });
});
