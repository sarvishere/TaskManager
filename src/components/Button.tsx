import React from "react";
import { fontWeight, BodySize } from "./SharedComponentStyles/sharedStyles";

const colors: {
  [color: string]: {
    primary: string;
    secondary: string;
    darker?: string;
    outline?: string;
  };
} = {
  brand: {
    primary: "bg-brand-primary",
    secondary: "bg-brand-secondary text-brand-primary",
    outline: "border-2 border-brand-primary text-brand-primary",
  },
  gray: {
    primary: "bg-gray-primary",
    secondary: "bg-gray-secondary text-gray-primary",
    darker: "bg-gray-darker",
  },
  red: {
    primary: "bg-red-primary",
    secondary: "bg-red-secondary text-red-primary",
  },
  pink: {
    primary: "bg-pink-primary",
    secondary: "bg-pink-secondary text-pink-primary",
  },
  grape: {
    primary: "bg-grape-primary",
    secondary: "bg-grape-secondary text-grape-primary",
  },
  violet: {
    primary: "bg-violet-primary",
    secondary: "bg-violet-secondary text-violet-primary",
  },
  indigo: {
    primary: "bg-inigo-primary",
    secondary: "bg-inigo-secondary text-inigo-primary",
  },
  blue: {
    primary: "bg-blue-primary",
    secondary: "bg-blue-secondary text-blue-primary",
  },
  cyan: {
    primary: "bg-cyan-primary",
    secondary: "bg-cyan-secondary text-cyan-primary",
  },
  teal: {
    primary: "bg-teal-primary",
    secondary: "bg-teal-secondary text-teal-primary",
  },
  green: {
    primary: "bg-green-primary",
    secondary: "bg-green-secondary text-green-primary",
  },
  lime: {
    primary: "bg-lime-primary",
    secondary: "bg-lime-secondary text-lime-primary",
  },
  yellow: {
    primary: "bg-yellow-primary",
    secondary: "bg-yellow-secondary text-yellow-primary",
  },
  ornage: {
    primary: "bg-orange-primary",
    secondary: "bg-orange-secondary text-orange-primary",
  },
};

enum Size {
  default = "p-3",
  full = "w-full",
}
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "darker" | "outline";
  color?: string;
  fontSize?: keyof typeof BodySize;
  weight?: keyof typeof fontWeight;
  size?: keyof typeof Size;
}
const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      asChild,
      className,
      children,
      size = "default",
      color = "gray",
      variant = "primary",
      fontSize = "S",
      weight = "800",
      ...props
    },
    ref
  ) => {
    if (asChild) return <button {...props}>{children}</button>;

    return (
      <button
        ref={ref}
        className={`
           font-iranyekan
          ${variant === "primary" && "text-white"} 
          ${colors[color][variant]}
          ${BodySize[fontSize]}
          ${fontWeight[weight]}
          ${Size[size]}
           font-black
           rounded-[6px]
           p-[10px]
           ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  }
);
export default Button;
