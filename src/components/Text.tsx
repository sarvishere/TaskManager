import { colors, BodySize } from "./SharedComponentStyles/sharedStyles";
interface Props {
  children?: string;
  color?: keyof typeof colors;
  colorVariant?: "primary" | "secondary";
  size?: keyof typeof BodySize;
}

const Text = ({
  children,
  colorVariant = "primary",
  color = "default",
  size = "XS",
}: Props) => {
  return (
    <p
      className={`font-iranyekan ${BodySize[size]} ${colors[color][colorVariant]}`}
    >
      {children}
    </p>
  );
};

export default Text;
