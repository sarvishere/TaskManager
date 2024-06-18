import styles from "./styles.module.css";
import Button from "../../ui/Button";
import Flex from "../../ui/Flex";
import Icon from "../../ui/Icon";
import Text from "../../ui/Text";
import TagBadge from "../../ui/TagBadge";
import Avatar from "../../ui/Avatar";
import { Task } from "../../../services/task-service";
import { Draggable } from "react-beautiful-dnd";
import moment from "jalali-moment";
import PriorityFlag from "./changetask";
import AvatarGroup from "../../ui/AvatarGroup";
import useTaskMembers from "../../../hooks/useTaskMembers";
import { useEffect, useState } from "react";
import getImageUrl from "../../../getImageUrl";
import ChangeTask from "./changetask";

export interface TaskProps {
  task: Task;
  index: number;
}

const TaskCard: React.FC<TaskProps> = ({ task, index }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  // const handleModalClose = () => {
  //   setModalOpen(false);
  // };

  const persianDeadline = moment(task.deadline)
    .locale("fa")
    .format("YYYY/MM/DD");

  // useEffect(() => {
  //   getMembers(workspaceId, projectId, boardId, task.id);
  // }, []);

  return (
    <Draggable index={index} draggableId={String(task.id)}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          className={`${styles.multipleShadows} w-[250px]  bg-white rounded-lg p-4`}
        >
          <Flex className="group" direction="col" gap="S">
            <Flex justifyContent="between" alignItems="center">
              <Text className="text-[#1f2b52]">{task.name}</Text>
            </Flex>
            <Flex>
              <Icon iconName="Description" />
              <Text className="text-xs">{task.description}</Text>
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
                <Button asChild onClick={handleModalOpen}>
                  <Icon iconName="More" />
                </Button>
              </Flex>
            </Flex>
          </Flex>
          {isModalOpen && (
            <ChangeTask
              onClose={() => {
                setModalOpen(false);
              }}
              handleonDelete={handledelete}
            />
          )}
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
