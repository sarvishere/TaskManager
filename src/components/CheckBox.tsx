import React, { ReactNode } from "react";
import Flex from "./Flex";

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
            className={`appearance-none w-full h-full checked:bg-brand-secondary before:absolute before:inset-0 before:flex before:items-center before:justify-center before:text-brand-primary checked:before:content-['✓'] transition-all duration-300 border border-solid border-gray-999 rounded-[4px]`}
            type="checkbox"
            {...rest}
          />
        </div>
        <label className="font-iranyekan" htmlFor={id}>
          {label}
        </label>
      </Flex>
    );
  }
);

export default CheckBox;
