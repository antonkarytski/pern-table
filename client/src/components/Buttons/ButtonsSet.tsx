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
  activeIndex,
  className,
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
        })
        .filter((el, index) => {
          return (
            index === 0 ||
            (activeIndex < 4 && index < 6) ||
            (activeIndex > buttonsCount - 5 && index > buttonsCount - 7) ||
            index === buttonsCount - 1 ||
            index === activeIndex ||
            (index < activeIndex && index >= activeIndex - 2) ||
            (index > activeIndex && index <= activeIndex + 2)
          );
        })}
    </div>
  );
}
