import React from "react";
import Text from "./Text";
import { BodySize } from "../SharedComponentStyles/sharedStyles";

const colors = {
  brand: "bg-brand-secondary",
  gray: "bg-gray-secondary",
  red: "bg-red-secondary",
  pink: "bg-pink-secondary",
  grape: "bg-grape-secondary",
  violet: "bg-violet-secondary",
  indigo: "bg-indigo-secondary",
  blue: "bg-blue-secondary",
  cyan: "bg-cyan-secondary",
  teal: "bg-teal-secondary",
  green: "bg-green-secondary",
  lime: "bg-lime-secondary",
  yellow: "bg-yellow-secondary",
  ornage: "bg-orange-secondary",
};

interface Props {
  firstName: string;
  lastName: string;
  fontSize?: keyof typeof BodySize;
  className?: string;
  color?: keyof typeof colors;
}

const Avatar: React.FC<Props> = ({
  firstName,
  lastName,
  fontSize,
  className,
  color = "yellow",
}) => {
  return (
    <span
      className={`${colors[color]} pt-[6.1px] pr-[5.42px] pb-[4.75px] pl-[5.42px] inline-flex justify-center items-center rounded-full ${className}`}
    >
      <Text weight="500" color={color} size={fontSize}>
        {firstName[0].toUpperCase() + lastName[0].toUpperCase()}
      </Text>
    </span>
  );
};

export default Avatar;
