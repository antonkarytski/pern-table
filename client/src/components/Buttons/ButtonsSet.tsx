import React from "react";
import cx from "classnames";
import Button from "./Button";

interface ButtonSetProps {
  buttonsCount: number;
  onClick: (index: number) => unknown;
  activeIndex: number;
  className: string;
  classes?: {
    button?: string;
    buttonActive?: string;
  };
}

export default function ButtonsSet({
  buttonsCount,
  onClick,
  className,
  activeIndex,
  classes,
}: ButtonSetProps) {
  return (
    <div className={className}>
      {Array(buttonsCount)
        .fill(null)
        .map((e, index) => {
          return (
            <Button
              className={cx(
                classes?.button,
                classes?.buttonActive && {
                  [classes.buttonActive]: index === activeIndex,
                }
              )}
              key={`buttonSet${className}Key${index}`}
              onClick={() => onClick(index)}
              label={index + 1}
            />
          );
        })}
    </div>
  );
}
