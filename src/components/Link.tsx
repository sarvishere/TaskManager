import { ReactNode } from "react";
import { Link as RouterLink, LinkProps } from "react-router-dom";
import {
  fontWeight,
  BodySize,
  colors,
} from "./SharedComponentStyles/sharedStyles";

interface Props extends LinkProps {
  children: ReactNode;
  weight?: keyof typeof fontWeight;
  underline?: boolean;
  color?: keyof typeof colors;
  colorVariant?: "primary" | "secondary";
  size?: keyof typeof BodySize;
}
const Link = ({
  children,
  underline = false,
  color = "default",
  className,
  colorVariant = "primary",
  weight = "400",
  size = "XS",
  ...rest
}: Props) => {
  return (
    <RouterLink
      className={`font-iranyekan font-black text-2xl 
      ${colors[color][colorVariant]} 
      ${underline && "underline underline-offset-8"}
      ${fontWeight[weight]}
      ${BodySize[size]}
      ${className}
      `}
      {...rest}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
