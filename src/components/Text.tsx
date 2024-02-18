import {
  colors,
  BodySize,
  fontWeight,
} from "./SharedComponentStyles/sharedStyles";
interface Props {
  children?: string;
  color?: keyof typeof colors;
  colorVariant?: "primary" | "secondary";
  size?: keyof typeof BodySize;
  weight?: keyof typeof fontWeight;
}

const Text = ({
  children,
  colorVariant = "primary",
  color = "default",
  size = "XS",
  weight = "400",
}: Props) => {
  return (
    <p
      className={`font-iranyekan ${BodySize[size]} ${fontWeight[weight]} ${colors[color][colorVariant]}`}
    >
      {children}
    </p>
  );
};

export default Text;
