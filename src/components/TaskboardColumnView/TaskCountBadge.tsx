import Text from "../ui/Text";

interface Props {
  count: number;
}

const convertToPersian = (number: number) => {
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(number).replace(
    /\d/g,
    (match) => persianNumbers[parseInt(match)]
  );
};

const TaskCountBadge: React.FC<Props> = ({ count = 0 }) => {
  return (
    <div className="bg-[#F4F4F4] h-[19px] rounded-[100px] pt-0.5 pr-1 pb-0 pl-1">
      <Text>{convertToPersian(count)}</Text>
    </div>
  );
};

export default TaskCountBadge;
