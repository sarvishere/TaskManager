import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}
const Card = ({ children, className }: Props) => {
  return (
    <div
      className={`bg-white max-w-[640px] w-full shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25)] p-6 rounded-b-[20px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
