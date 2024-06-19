import styles from "./styles.module.css";
import Button from "../../ui/Button";
import Flex from "../../ui/Flex";
import Icon from "../../ui/Icon";
import Text from "../../ui/Text";
import { Draggable } from "react-beautiful-dnd";
import moment from "jalali-moment";
import useDeleteTask from "../../../hooks/useDeleteTask";
import { useParams } from "react-router-dom";

export interface TaskProps {
  index: number;
  boardId: number;
  setTasks: any;
  taskName: string;
  taskDeadline: any;
  taskDes: string;
  taskId: number;
}

const TaskCard = ({
  index,
  boardId,
  setTasks,
  taskName,
  taskDeadline,
  taskDes,
  taskId,
}: TaskProps) => {
  const { deleteTask } = useDeleteTask();
  const { workspaceId, projectId } = useParams();
  const handleDeleteTask = () => {
    deleteTask(Number(workspaceId), Number(projectId), boardId, taskId);
    setTasks((prevTasks: any) => {
      const updateTask = prevTasks.filter((t: any) => t.id !== taskId);
      return updateTask;
    });
  };

  const persianDeadline = moment(taskDeadline)
    .locale("fa")
    .format("YYYY/MM/DD");

  return (
    <Draggable index={index} draggableId={String(taskId)} key={taskId}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          className={`${
            styles.multipleShadows
          } w-[250px] bg-white rounded-lg p-4 ${
            snapshot.isDragging ? "dragging" : ""
          }`}
        >
          <Flex className="group" direction="col" gap="S">
            <Flex justifyContent="between" alignItems="center">
              <Text className="text-[#1f2b52]">{taskName}</Text>
            </Flex>
            <Flex>
              <Icon iconName="Description" />
              <Text className="text-xs">{taskDes}</Text>
            </Flex>
            <Flex gap="XS" justifyContent="end">
              <Text className="whitespace-nowrap" color="gray">
                ساخته شده در:
              </Text>
              <Text className="whitespace-nowrap " color="gray">
                {persianDeadline}
              </Text>
            </Flex>
            <Flex direction="col" gap="S" className="hidden group-hover:flex">
              <Flex justifyContent="between">
                <Button asChild onClick={handleDeleteTask}>
                  <Icon iconName="Remove" stroke="red" />
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
