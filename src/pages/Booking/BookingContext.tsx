import React, { createContext, useState, ReactNode } from "react";

interface CustomerInfo {
  customerFName: string | null;
  customerLName: string | null;
  emailAddress: string | null;
}

interface BookingInfo {
  bookingDate: string | null;
  bookingTime: string | null;
  numberPax: number;
}

interface BookingContextType {
  customerInfoData: CustomerInfo;
  setCustomerInfoData: React.Dispatch<React.SetStateAction<CustomerInfo>>;
  bookingInfoData: BookingInfo;
  setBookingInfoData: React.Dispatch<React.SetStateAction<BookingInfo>>;
  attemptBooking: boolean;
  setAttemptBooking: React.Dispatch<React.SetStateAction<boolean>>;
  isBookingConfirm: boolean;
  setIsBookingConfirmed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BookingContext = createContext<BookingContextType | undefined>(
  undefined
);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [customerInfoData, setCustomerInfoData] = useState<CustomerInfo>({
    customerFName: "",
    customerLName: "",
    emailAddress: "",
  });
  const [bookingInfoData, setBookingInfoData] = useState<BookingInfo>({
    bookingDate: "",
    bookingTime: "",
    numberPax: 0,
  });
  const [attemptBooking, setAttemptBooking] = useState<boolean>(false);
  const [isBookingConfirm, setIsBookingConfirmed] = useState<boolean>(false);

  return (
    <BookingContext.Provider
      value={{
        customerInfoData,
        setCustomerInfoData,
        bookingInfoData,
        setBookingInfoData,
        attemptBooking,
        setAttemptBooking,
        isBookingConfirm,
        setIsBookingConfirmed,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
