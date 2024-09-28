import React from "react";
import "./buttonmain.css";

function ButtonMain({ id, children, onClick, style, disabled }: any) {
  return (
    <button
      id={id}
      className={`button-main ${disabled ? "disabled" : ""}`} // Add class for disabled state
      onClick={disabled ? undefined : onClick} // Prevent onClick if disabled
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default ButtonMain;
