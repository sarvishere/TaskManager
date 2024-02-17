import { ReactNode } from "react";
import { Link as RouterLink, LinkProps } from "react-router-dom";
import { fontWeight, Size, colors } from "./SharedComponentStyles/sharedStyles";

interface Props extends LinkProps {
  children: ReactNode;
  weight?: keyof typeof fontWeight;
  underline?: boolean;
  color?: keyof typeof colors;
  colorVariant?: "primary" | "secondary";
  size?: keyof typeof Size;
}
const Link = ({
  children,
  underline = false,
  to,
  color = "default",
  colorVariant = "primary",
  weight = "400",
  size = "XS",
}: Props) => {
  return (
    <RouterLink
      to={to}
      className={`font-iranyekan font-black text-2xl 
      ${colors[color][colorVariant]} 
      ${underline && "underline underline-offset-4"}
      ${fontWeight[weight]}
      ${Size[size]}
      `}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
