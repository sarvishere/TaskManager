import { HTMLAttributes, ReactNode } from "react";

enum Size {
  XS = "gap-2",
  S = "gap-4",
  M = "gap-6",
  L = "gap-8",
  XL = "gap-10",
}
enum FlexDirection {
  row = "flex-row",
  row_reverse = "flex-row-reverse",
  col = "flex-col",
  col_reverse = "flex-col-reverse",
}

const justifyMap = {
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

const alignMap = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
  baseline: "items-baseline",
  stretch: "items-stretch",
};

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  direction?: keyof typeof FlexDirection;
  gap?: keyof typeof Size;
  justifyContent?: "start" | "end" | "center" | "between" | "around" | "evenly";
  alignItems?: "start" | "end" | "center" | "baseline" | "stretch";
}

const Flex = ({
  children,
  justifyContent = "start",
  alignItems = "start",
  direction = "row",
  gap = "XS",
  className,
  ...rest
}: Props) => {
  return (
    <div
      className={`flex 
      ${Size[gap]}
      ${FlexDirection[direction]} 
      ${justifyContent ? justifyMap[justifyContent] : "justify-start"}
      ${alignItems ? alignMap[alignItems] : "items-start"}
      ${className ?? ""}
      w-full
      `}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Flex;
