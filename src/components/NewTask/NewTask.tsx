import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Button from "../ui/Button";
import Flex from "../ui/Flex";
import Icon from "../ui/Icon";
import useAddTask from "../../hooks/useAddTask";
import { useParams } from "react-router-dom";
import moment from "jalali-moment";
import { Task } from "../../services/task-service";

interface NewTaskProps {
  onClose: () => void;
  boardId?: number;
  boardName?: string;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  incrementTaskCount: (boardId: number) => void; // Add incrementTaskCount as a prop
}

const convertToPersian = (number: number | string) => {
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(number).replace(
    /\d/g,
    (match) => persianNumbers[parseInt(match)]
  );
};

const NewTask: React.FC<NewTaskProps> = ({
  onClose,
  boardId,
  boardName,
  setTasks,
  incrementTaskCount, // Add incrementTaskCount to the destructuring
}) => {
  const { addTask } = useAddTask();
  const [startTask, setStartTask] = useState("");
  const [taskName, setTaskName] = useState("عنوان تسک");
  const [taskDesc, setTaskDesc] = useState("");
  const { workspaceId, projectId } = useParams();
  const selectedBoardId = boardId;

  useEffect(() => {
    const currentDate = moment().locale("fa").format("YYYY/MM/DD");
    setStartTask(currentDate);
  }, []);

  const handleTaskDesc = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTaskDesc(e.target.value);
  };

  const handleSubmitNewTask = async (e: FormEvent) => {
    e.preventDefault();
    if (selectedBoardId) {
      const taskData = { name: taskName, description: taskDesc };

      try {
        const newTask = await addTask(
          Number(workspaceId),
          Number(projectId),
          selectedBoardId,
          taskData
        );
        if (newTask && newTask.id) {
          setTasks((prevTasks: Task[]) => [...prevTasks, newTask]);
          incrementTaskCount(selectedBoardId); // Call incrementTaskCount when a task is added
          onClose();
        } else {
          console.error("Failed to add new task");
        }
      } catch (error) {
        console.error("Error adding task:", error);
      }
    }
  };

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <form onSubmit={handleSubmitNewTask}>
        <Flex
          justifyContent="center"
          alignItems="center"
          className="inset-0 w-screen h-screen backdrop-blur-sm"
        >
          <Flex
            direction="col"
            gap="XL"
            className="basis-3/4 p-8 bg-white rounded-[20px] shadow-[0_12px_32px_0_rgba(0,0,0,0.25)] "
          >
            <Flex justifyContent="between" alignItems="center">
              <Flex alignItems="center">
                <Icon iconName="Edit" />
                <input
                  className="w-full px-4 text-mh placeholder:text-gray-800 focus:outline-gray-secondary hover:bg-blue-light hover:border-gray-primary hover:border rounded"
                  placeholder="عنوان تسک"
                  type="text"
                  onChange={(e) => setTaskName(e.target.value)}
                  value={taskName}
                />
              </Flex>
              <button onClick={handleCloseModal}>
                <Icon iconName="Close" />
              </button>
            </Flex>
            <div className="w-full flex justify-between">
              <div>
                <p className="text-lg text-gray-800">{`عنوان برد: ${boardName}`}</p>
              </div>
              <div className="flex pl-20">
                <div className="flex pl-20 items-center justify-evenly gap-2">
                  <p className="text-xs font-normal text-gray-primary ">
                    ساخته شده در:
                  </p>
                  <p className="text-xs font-normal text-gray-primary">
                    {convertToPersian(startTask)}
                  </p>
                </div>
              </div>
            </div>
            <Flex>
              <textarea
                placeholder="توضیحاتی برای این تسک بنویسید"
                className="w-full h-40 p-4 rounded-xl border-2 border-gray-secondary focus:outline-gray-primary"
                onChange={handleTaskDesc}
              />
            </Flex>
            <Flex justifyContent="between" alignItems="center">
              <Button
                weight="400"
                color="brand"
                className="text-nowrap text-xs px-8"
                type="submit"
              >
                ساختن تسک
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </form>
    </div>
  );
};

export default NewTask;
