import React from "react";
import "./buttondelivery.css";

function ButtonDelivery({ id, children, onClick, style }: any) {
  return (
    <button id={id} className="button-delivery" onClick={onClick} style={style}>
      {children}
    </button>
  );
}

export default ButtonDelivery;
