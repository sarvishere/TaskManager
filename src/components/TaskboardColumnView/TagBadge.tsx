import { BodySize, fontWeight } from "../SharedComponentStyles/sharedStyles";
import Text from "../ui/Text";

const colors = {
  brand: "bg-brand-secondary",
  gray: "bg-gray-secondary",
  red: "bg-red-secondary",
  pink: "bg-pink-secondary",
  grape: "bg-grape-secondary",
  violet: "bg-violet-secondary",
  indigo: "bg-inigo-secondary",
  blue: "bg-blue-secondary",
  cyan: "bg-cyan-secondary",
  teal: "bg-teal-secondary",
  green: "bg-green-secondary",
  lime: "bg-lime-secondary",
  yellow: "bg-yellow-secondary",
  ornage: "bg-orange-secondary",
};

interface Props {
  color: keyof typeof colors;
  className?: string;
  children: string;
  size?: keyof typeof BodySize;
  weight?: keyof typeof fontWeight;
}
const TagBadge: React.FC<Props> = ({
  color,
  className,
  children,
  size,
  weight,
}) => {
  return (
    <span
      className={`inline-flex items-center p-2 justify-center h-[24px] rounded-[14px] 
      ${colors[color]}
      ${className ?? ""}`}
    >
      <Text color={color} weight={weight} size={size}>
        {children}
      </Text>
    </span>
  );
};

export default TagBadge;
