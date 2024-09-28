import BookingForm from "./BookingForm/BookingForm";
import BookingHeader from "./BookingHeader/BookingHeader";
import { BookingProvider } from "./BookingContext";

function Booking() {
  return (
    <BookingProvider>
      <div>
        <BookingHeader />
        <BookingForm />
      </div>
    </BookingProvider>
  );
}

export default Booking;
