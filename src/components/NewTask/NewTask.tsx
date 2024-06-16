import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Button from "../ui/Button";
import Flex from "../ui/Flex";
import Icon from "../ui/Icon";
import DatePickerCard from "../DatePickerCard/DatePickerCard";
import useRadioStore from "../../hooks/useRadioStore";
import useAddTask from "../../hooks/useAddTask";
import { useParams } from "react-router-dom";
import { BoardResponse } from "../../services/board-service";
import moment from "jalali-moment";

interface NewTaskProps {
  onClose: () => void;
  location?: string;
  boardId?: number;
  boardName?: string;
  boards?: BoardResponse[];
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
  location,
  boardId,
  boardName,
  boards,
}) => {
  const { addTask } = useAddTask();

  const [calenderVisibility, setCalenderVisibility] = useState(false);
  const selectedValue = useRadioStore((state) => state.selectedValue);

  const [startTask, setStartTask] = useState("");
  const [endTask, setEndTask] = useState("");

  const [taskName, setTaskName] = useState("عنوان تسک");
  const [taskDesc, setTaskDesc] = useState("");

  // To get the current workspaceId from the params
  const { workspaceId, projectId } = useParams();

  // To store the selected board's id
  const [selectedBoardId, setSelectedBoardId] = useState(boardId);

  // The following useEffect makes sure that if there is no boardId, the first board is selected by default
  useEffect(() => {
    if (boards && boards.length > 0 && !boardId) {
      setSelectedBoardId(boards[0].id);
    }
  }, [boards, boardId]);

  const handleTaskDesc = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTaskDesc(e.target.value);
  };

  const handleSelectBoard = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedBoardName = e.target.value;
    const selectedId = boards?.find(
      (board) => board.name === selectedBoardName
    )?.id;
    setSelectedBoardId(selectedId);
  };
  const task = {
    name: taskName,
    description: taskDesc,
    priority: selectedValue,
    order: 1,
  };
  const handleSubmitNewTask = (e: FormEvent) => {
    e.preventDefault();
    addTask(
      Number(workspaceId),
      Number(projectId),
      Number(selectedBoardId),
      task
    );
    onClose();
  };
  const handleCloseModal = () => {
    onClose();
  };

  // Handling the conversion of the start date
  const handleStartDate = (date: string) => {
    const convertedDate = convertToPersian(
      moment(date, "YYYY-MM-DD").locale("fa").format("jDD jMMMM jYYYY")
    );
    setStartTask(convertedDate);
  };
  // Handling the conversion of the end date
  const handleEndDate = (date: string) => {
    const convertedDate = convertToPersian(
      moment(date, "YYYY-MM-DD").locale("fa").format("jDD jMMMM jYYYY")
    );
    setEndTask(convertedDate);
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
                {" "}
                <Icon iconName="Close" />{" "}
              </button>
            </Flex>
            <div className="w-full flex justify-between">
              <div>
                {/* When the NewTask button is clicked on the board itself, the board name will be displayed
                otherwise the list of boards the user can choose from */}
                {location === "columnView" ? (
                  <Flex alignItems="center">
                    در
                    <select
                      onChange={handleSelectBoard}
                      className="border-2 border-gray-secondary rounded-md basis-1/6 p-1 focus:outline-gray-primary"
                      value={!selectedBoardId && boards && boards[0].id}
                    >
                      {boards &&
                        boards.map((board, index) => (
                          <option key={index} value={board.name}>
                            {board.name}
                          </option>
                        ))}
                    </select>
                  </Flex>
                ) : (
                  <p className="text-lg text-gray-800">{`عنوان برد: ${boardName}`}</p>
                )}
              </div>
              <div className="flex pl-20">
                {/* Start date displayed */}
                <div className="flex flex-col ml-4">
                  <p className="text-xs font-normal text-gray-primary mb-2">
                    ساخته شده در:
                  </p>
                  <p className="font- text-base">{startTask}</p>
                </div>
                {/* End date displayed */}
                <div className="flex flex-col ml-4">
                  <p className="text-xs font-normal text-gray-primary mb-2">
                    ددلاین:
                  </p>
                  <p className="font- text-base">{endTask}</p>
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
              <Icon
                iconName="DashedCalendar"
                className={`cursor-pointer ${
                  startTask && endTask ? "text-green-500" : "text-default-color"
                }`}
                onClick={() => setCalenderVisibility(true)}
              />

              <DatePickerCard
                visible={calenderVisibility}
                onSelectFinishDate={(date) => handleStartDate(date)}
                onSelectStartDate={(date) => handleEndDate(date)}
                onClose={() => setCalenderVisibility(false)}
              />

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
