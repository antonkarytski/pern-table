import React, { SyntheticEvent } from "react";
import { setFirstLetterToCapital } from "../../helpers/helpers";

type SelectProps = {
  options: string[];
  onChange: (event: SyntheticEvent<HTMLSelectElement>) => unknown;
  name: string;
  value: string;
  label?: string;
  [key: string]: unknown;
};

export default function Select({
  options,
  onChange,
  name,
  value,
  label,
  ...props
}: SelectProps) {
  return (
    <div>
      {label ? <span>{label} </span> : null}
      <select name={name} onChange={onChange} value={value} {...props}>
        {options.map((option, index) => {
          return (
            <option value={option} key={`option${name}${option}${index}`}>
              {setFirstLetterToCapital(option)}
            </option>
          );
        })}
      </select>
    </div>
  );
}
