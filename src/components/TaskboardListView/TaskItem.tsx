import { FC } from "react";
import Flex from "../ui/Flex";
import Icon from "../ui/Icon";
import Text from "../ui/Text";
import jalaali from "jalaali-js";

interface TaskItemProps {
  taskDeadline: string;
  TaskName: string;
  boardColor: string;
  Description: string;
}

const TaskItem: FC<TaskItemProps> = ({
  boardColor,
  taskDeadline,
  TaskName,
  Description,
}) => {
  const convertToPersianNumber = (number: number | string) => {
    const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return number
      .toString()
      .split("")
      .map((digit) =>
        /\d/.test(digit) ? persianNumbers[parseInt(digit)] : digit
      )
      .join("");
  };

  const convertToJalali = (date: string) => {
    const [year, month, day] = date.split("-").map(Number);
    const { jy, jm, jd } = jalaali.toJalaali(year, month, day);
    return `${convertToPersianNumber(jd)} / ${convertToPersianNumber(
      jm
    )} / ${convertToPersianNumber(jy)}`;
  };

  return (
    <Flex className="w-full py-4">
      <Flex alignItems="center" className="basis-4/12 pr-16">
        <span className={`bg-${boardColor}-primary w-5 h-5 rounded`}></span>
        <Text size="M">{TaskName}</Text>
      </Flex>
      <Flex justifyContent="start" className="basis-2/12">
        <Text size="M">{convertToJalali(taskDeadline)}</Text>
      </Flex>
      <Flex justifyContent="start" className="basis-2/12 ">
        <Icon iconName="Description" width={20} height={20} />
        <h3> {Description}</h3>
      </Flex>
      <Flex justifyContent="end" className="basis-2/12 ">
        <Icon iconName="Remove" width={20} height={20} />
      </Flex>
    </Flex>
  );
};

export default TaskItem;
