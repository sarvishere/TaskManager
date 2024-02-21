import React, { ReactNode } from "react";
import Flex from "./Flex";
import tick from "../../assets/Icons/tick.svg";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
}

const CheckBox = React.forwardRef<HTMLInputElement, Props>(
  ({ id, label, className, ...rest }, ref) => {
    return (
      <Flex gap="XS" alignItems="center">
        <div className="w-[20px] h-[20px] relative">
          <input
            id={id}
            ref={ref}
            className={`peer appearance-none w-full h-full checked:bg-brand-secondary checked:border-brand-primary transition-all duration-300 border border-solid border-gray-999 rounded-[4px]`}
            type="checkbox"
            {...rest}
          />
          <span className="absolute hidden peer-checked:flex pointer-events-none inset-0 justify-center items-center">
            <img className="" src={tick} alt="tick icon" />
          </span>
        </div>
        <label className="font-iranyekan" htmlFor={id}>
          {label}
        </label>
      </Flex>
    );
  }
);

export default CheckBox;
