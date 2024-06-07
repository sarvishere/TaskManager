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
import PriorityFlag from "./PriorityFlag";
import AvatarGroup from "../../ui/AvatarGroup";
import useTaskMembers from "../../../hooks/useTaskMembers";
import { useEffect } from "react";
import getImageUrl from "../../../getImageUrl";

export interface TaskProps {
  task: Task;
  index: number;
}

const TaskCard: React.FC<TaskProps> = ({ task, index }) => {
  const { getMembers, members } = useTaskMembers();
  const workspaceId = 2;
  const projectId = 2;
  const boardId = 3;

  useEffect(() => {
    getMembers(workspaceId, projectId, boardId, task.id);
  }, []);

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
            <img
              src={getImageUrl(task.thumbnail)}
              alt="A thumbnail for a task"
              className=" object-cover w-full rounded-[4px]"
            />
            <Flex justifyContent="between" alignItems="center">
              <Text className="text-[#534D60]">{task.name}</Text>
              <AvatarGroup>
                {members.map((m) => (
                  <Avatar
                    className="hidden group-hover:block"
                    firstName={m.user.first_name}
                    lastName={m.user.last_name}
                  />
                ))}
              </AvatarGroup>
            </Flex>
            <Flex>
              <Text className="text-xs">{task.description}</Text>
              <Icon iconName="Description" />
            </Flex>
            <Flex gap="XS">
              <PriorityFlag priority={task.priority} />
              <Text className="whitespace-nowrap">
                {calculateDeadline(task)}
              </Text>
              <Flex>
                <Icon iconName="CheckBox" />
                <Text className="text-[#BDC0C6]">۲ / ۱۲</Text>
              </Flex>
            </Flex>
            <Flex>
              <TagBadge color="grape">پروژه</TagBadge>
              <TagBadge color="blue">درس</TagBadge>
            </Flex>
            <Flex direction="col" gap="S" className="hidden group-hover:flex">
              <div className=" w-full h-[1px] bg-[#EFF0F0]"></div>
              <Flex justifyContent="between">
                <Button asChild>
                  <Icon iconName="CircleTicked" />
                </Button>
                <Button asChild>
                  <Icon iconName="More" />
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </div>
      )}
    </Draggable>
  );
};

const calculateDeadline = (task: Task) => {
  const months = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];
  const convertToPersian = (number: number | string) => {
    const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return String(number).replace(
      /\d/g,
      (match) => persianNumbers[parseInt(match)]
    );
  };

  const createdAt = moment(task.created_at);
  const deadline = moment(task.deadline, "YYYY-MM-DD");

  const monthAndDayFormat = (date: moment.Moment): string =>
    `${convertToPersian(date.jDate())} - ${months[date.jMonth()]}`;
  const diff = deadline.diff(createdAt, "days");
  return monthAndDayFormat(moment(diff, "jYYYY-jMM-jDD"));
};

export default TaskCard;
