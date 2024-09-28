import React, { useContext } from "react";
import Input from "../../../../components/input/InputForm";
import { BookingContext } from "../../BookingContext";
import ErrorMessage from "../../../../components/errormessage/ErrorMessage";

function CustomerInfo() {
  const context = useContext(BookingContext);
  if (!context) {
    return null;
  }
  const { customerInfoData, setCustomerInfoData } = context;

  async function handleFirstNameChange(e: any) {
    setCustomerInfoData((prevData) => ({
      ...prevData,
      customerFName: e.target.value,
    }));
  }

  async function handleLastNameChange(e: any) {
    setCustomerInfoData((prevData) => ({
      ...prevData,
      customerLName: e.target.value,
    }));
  }

  async function handleEmailChange(e: any) {
    setCustomerInfoData((prevData) => ({
      ...prevData,
      emailAddress: e.target.value,
    }));
  }

  return (
    <div>
      <h3>
        <b>Contact Information</b>
      </h3>
      <p>
        <b>Customer name:</b>
        <span className="row">
          <div className="left-column">
            <Input
              placeholder="First Name"
              onChange={handleFirstNameChange}
            ></Input>
            <ErrorMessage data={customerInfoData?.customerFName} />
          </div>
          <div className="right-column">
            <Input
              placeholder="Last Name"
              onChange={handleLastNameChange}
            ></Input>
            <ErrorMessage data={customerInfoData?.customerLName} />
          </div>
        </span>
      </p>

      <p>
        <b>Email:</b>
        <Input
          type="email"
          placeholder="Eg: contact@littlelemon.com"
          onChange={handleEmailChange}
        ></Input>
        <ErrorMessage data={customerInfoData?.emailAddress} />
      </p>
    </div>
  );
}

export default CustomerInfo;
