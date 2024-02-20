import React from "react";
import Flex from "./Flex";
import { colors, BodySize } from "./SharedComponentStyles/sharedStyles";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelFontSize?: keyof typeof BodySize;
  labelColor?: keyof typeof colors;
  labelColorVariant?: "primary" | "secondary";
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      className,
      id,
      labelColor = "default",
      labelColorVariant = "primary",
      labelFontSize = "S",
      ...rest
    },
    ref
  ) => {
    return (
      <Flex direction="col" gap="XS">
        <label
          className={`font-iranyekan block ${BodySize[labelFontSize]} ${colors[labelColor][labelColorVariant]}`}
          htmlFor={id}
        >
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          className={`outline-none w-full p-1 ${colors["default"]["primary"]} rounded-[6px] border border-solid border-gray-aaa h-[40px] ${className}`}
          type="text"
          {...rest}
        />
      </Flex>
    );
  }
);

export default Input;
