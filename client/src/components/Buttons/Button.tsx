import React, { ReactComponentElement, SyntheticEvent } from "react";
import cx from "classnames";
import classes from "./Buttons.module.scss";

export type ButtonProps = {
  onClick: (event: SyntheticEvent) => unknown;
  className?: string;
  label?: number | string | ReactComponentElement<any>;
};

export default function Button({ className, label, ...props }: ButtonProps) {
  return (
    <button className={cx(classes.Button, className)} {...props}>
      {label}
    </button>
  );
}
