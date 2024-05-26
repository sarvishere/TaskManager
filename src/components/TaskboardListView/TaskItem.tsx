import { FC } from "react";
import Flex from "../ui/Flex";
import Icon from "../ui/Icon";
import Text from "../ui/Text";

interface TaskItemProps {
  taskState: string;
  taskDeadline: string;
}

const TaskItem: FC<TaskItemProps> = ({ taskState, taskDeadline }) => {
  const stateColor =
    taskState === "Done"
      ? "green"
      : taskState === "Pending"
      ? "pink"
      : taskState === "In progress"
      ? "orange"
      : "pink";
  return (
    <Flex className="w-full py-4">
      <Flex alignItems="center" className="basis-4/12 pr-16">
        <span
          className={` bg-
        ${stateColor}-primary w-5 h-5 rounded`}
        ></span>
        <Text size="M">این یک تیتر برای این تسک است.</Text>
      </Flex>

      <Flex justifyContent="center" className="basis-2/12">
        <img
          src="../src/assets/images/fake-person-1.jpg"
          alt="fake person 1"
          className="w-10 h-10 rounded-full object-cover z-10"
        />
        <img
          src="../src/assets/images/fake-person-2.jpg"
          alt="fake person 1"
          className="rounded-full w-10 h-10 object-cover -mr-6"
        />
      </Flex>

      <Flex justifyContent="center" className="basis-2/12">
        <Text size="M">{taskDeadline}</Text>
      </Flex>

      <Flex justifyContent="center" className="basis-2/12">
        <Icon
          iconName="Flag"
          width={20}
          height={20}
          className="text-blue-800"
        />
      </Flex>

      <Flex justifyContent="center" className="basis-2/12">
        <Icon iconName="Description" width={20} height={20} />
      </Flex>
    </Flex>
  );
};
export default TaskItem;
