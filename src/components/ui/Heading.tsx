import React from "react";
import {
  fontWeight,
  colors,
  Size,
} from "../SharedComponentStyles/sharedStyles";

enum TextAlign {
  center = "text-center",
  left = "text-left",
  right = "text-right",
}
interface Props {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  align?: keyof typeof TextAlign;
  children: string;
  color?: keyof typeof colors;
  colorVariant?: "primary" | "secondary";
  size?: keyof typeof Size;
  weight?: keyof typeof fontWeight;
  className?: string;
}

const Heading = ({
  as,
  children,
  color = "default",
  colorVariant = "primary",
  size = "XS",
  weight = "800",
  align = "right",
  className,
}: Props) => {
  return React.createElement(as, {
    className: `font-iranyekan ${Size[size]} ${colors[color][colorVariant]} ${fontWeight[weight]} ${className} ${TextAlign[align]}`,
    children,
  });
};

export default Heading;
