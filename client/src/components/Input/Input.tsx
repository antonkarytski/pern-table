import React, { SyntheticEvent } from "react";

type InputProps = {
  type: string;
  name: string;
  value: string;
  onChange: (event: SyntheticEvent<HTMLInputElement>) => unknown;
  label?: string;
  [key: string]: unknown;
};

export default function Input({
  type,
  name,
  value,
  onChange,
  label,
  ...props
}: InputProps) {
  return (
    <div>
      <label htmlFor={`inputId${name}`}>{label}</label>
      <input
        id={`inputId${name}`}
        onChange={onChange}
        type={type}
        value={value}
        name={name}
        {...props}
      />
    </div>
  );
}
