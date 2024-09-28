import React from "react";
import "./input.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
}

function Input({
  className,
  style,
  label,
  type,
  defaultValue,
  ...props
}: InputProps) {
  let currentValue = defaultValue;
  let minDate;

  if (type === "number" && !defaultValue) {
    currentValue = 0;
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginBottom: "1rem" }}
    >
      {label && <label style={{ marginBottom: "0.5rem" }}>{label}</label>}
      <input
        className={`input ${className}`}
        style={style}
        type={type}
        defaultValue={currentValue}
        min={type === "number" ? 1 : undefined}
        max={type === "number" ? 10 : undefined}
        {...props}
      />
    </div>
  );
}

export default Input;
