interface Props {
  orientation: "horizontally" | "vertically";
}

const Seperator: React.FC<Props> = ({ orientation }) => {
  return (
    <div
      className={`${
        orientation === "horizontally" ? "w-full h-[1px]" : "h-full w-[1px]"
      } bg-[#AAA] `}
    ></div>
  );
};

export default Seperator;
