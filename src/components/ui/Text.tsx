import {
  colors,
  BodySize,
  fontWeight,
} from "../SharedComponentStyles/sharedStyles";
interface Props {
  children?: string;
  color?: keyof typeof colors;
  colorVariant?: "primary" | "secondary";
  size?: keyof typeof BodySize;
  weight?: keyof typeof fontWeight;
  className?: string;
}

const Text = ({
  children,
  colorVariant = "primary",
  color = "default",
  size = "XS",
  weight = "400",
  className,
}: Props) => {
  return (
    <p
      className={`font-iranyekan 
      ${BodySize[size]} 
      ${fontWeight[weight]} 
      ${colors[color][colorVariant]} 
      ${className ?? ""}`}
    >
      {children}
    </p>
  );
};

export default Text;
