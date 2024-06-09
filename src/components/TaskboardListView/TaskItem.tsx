import { FC } from "react";
import Flex from "../ui/Flex";
import Icon from "../ui/Icon";
import Text from "../ui/Text";

interface TaskItemProps {
  taskDeadline: any;
  TaskName: string;
  boardColor: string;
  TaskPriority: any;
  Description: string;
  Member: any;
}

const TaskItem: FC<TaskItemProps> = ({
  boardColor,
  taskDeadline,
  TaskName,
  Description,
}) => {
  return (
    <Flex className="w-full py-4">
      <Flex alignItems="center" className="basis-4/12 pr-16">
        <span className={` bg-${boardColor}-primary w-5 h-5 rounded`}></span>

        <Text size="M"> {TaskName} </Text>
      </Flex>

      <Flex justifyContent="center" className="basis-2/12">
        <Text size="M">{taskDeadline}</Text>
      </Flex>

      <Flex justifyContent="center" className="basis-2/12">
        <Icon iconName="Description" width={20} height={20} />
        {Description}
      </Flex>
    </Flex>
  );
};
export default TaskItem;
