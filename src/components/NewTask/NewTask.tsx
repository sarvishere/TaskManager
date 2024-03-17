import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import Flex from "../ui/Flex";
import Icon from "../ui/Icon";
import DatePickerCard from "../DatePickerCard/DatePickerCard";
import FlagSelection from "./FlagSelection";
import useRadioStore from "../../hooks/useRadioStore";
import { priorities } from "./priorities";
import useAddTask from "../../hooks/useAddTask";

interface NewTaskProps {
  visible: boolean;
}
const NewTask: React.FC<NewTaskProps> = () => {
  const { addTask } = useAddTask();

  const [calenderVisibility, setCalenderVisibility] = useState(false);
  const [priorityVisibility, setPriorityVisibility] = useState(false);

  const selectedValue = useRadioStore((state) => state.selectedValue);
  const getColorForPriority = (selectedValue: number): string => {
    const selectedPriority = priorities.find(
      (priority) => priority.id === selectedValue
    );

    return selectedPriority ? selectedPriority.color : "#C1C1C1";
  };

  const workspaceId = 1;
  const projectId = 1;
  const boardId = 1;

  const [startTask, setStartTask] = useState("");
  const [endTask, setEndTask] = useState("");

  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const [attachment, setAttachment] = useState<Blob | string>("");
  const [thumbnail, setThumbnail] = useState<Blob | string>("");

  const handleAttachment = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachment(e.target.files[0]);
    }
  };
  const handleThumbnail = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setThumbnail(e.target.files[0]);
    }
  };

  const handleTaskName = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const handleTaskDesc = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTaskDesc(e.target.value);
  };
  const task = {
    name: taskName,
    description: taskDesc,
    attachment: attachment,
    thumbnail: thumbnail,
    priority: selectedValue,
    order: 1,
  };
  const handleSubmitNewTask = (e: FormEvent) => {
    e.preventDefault();

    addTask(workspaceId, projectId, boardId, task);
  };

  return (
    <form onSubmit={handleSubmitNewTask}>
      <Flex
        justifyContent="center"
        alignItems="center"
        className="fixed inset-0 w-screen h-screen backdrop-blur-sm"
      >
        <Flex
          direction="col"
          gap="XL"
          className="basis-3/4 p-8 bg-white rounded-[20px] shadow-[0_12px_32px_0_rgba(0,0,0,0.25)] "
        >
          <Flex justifyContent="between" alignItems="center">
            <Flex alignItems="center">
              <span className=" bg-gray-primary w-4 h-4 rounded"></span>

              <input
                className="w-full px-4 text-mh placeholder:text-gray-800 focus:outline-gray-secondary"
                placeholder="عنوان تسک"
                type="text"
                required
                onChange={handleTaskName}
              />
            </Flex>
            <Icon iconName="Close" />
          </Flex>
          <Flex alignItems="center">
            در
            <select
              required
              className="border-2 border-gray-secondary rounded-md basis-1/6 p-1 focus:outline-gray-primary"
            >
              <option value="1">پروژه اول</option>
              <option value="2">پروژه دوم</option>
              <option value="3">پروژه سوم</option>
            </select>
            برای
            <Icon iconName="DashedAddMember" />
          </Flex>
          <Flex>
            <textarea
              placeholder="توضیحاتی برای این تسک بنویسید"
              className="w-full h-40 p-4 rounded-xl border-2 border-gray-secondary focus:outline-gray-primary"
              onChange={handleTaskDesc}
            />
          </Flex>
          <Flex className="font-medium">
            افزودن پیوست
            <label
              htmlFor="attached"
              className="cursor-pointer flex items-center gap-1 py-1 px-2 border-[1px] border-brand-primary rounded text-sm "
            >
              <Icon iconName="Link" fill="#208D8E" />
              <span>آپلود فایل</span>
            </label>
            <input
              id="attached"
              type="file"
              className="hidden"
              onChange={handleAttachment}
            />
          </Flex>
          <Flex className="font-medium">
            افزودن کاور
            <label
              htmlFor="attached"
              className="cursor-pointer flex items-center gap-1 py-1 px-2 border-[1px] border-brand-primary rounded text-sm "
            >
              <Icon iconName="Link" fill="#208D8E" />
              <span>آپلود فایل</span>
            </label>
            <input
              id="attached"
              type="file"
              className="hidden"
              onChange={handleThumbnail}
            />
          </Flex>
          <Flex justifyContent="between" alignItems="center">
            <Flex gap="L" className=" relative">
              <Icon
                iconName="DashedFlag"
                className="cursor-pointer"
                onClick={() => {
                  setPriorityVisibility(true);
                }}
                stroke={getColorForPriority(selectedValue)}
              />
              <FlagSelection
                visible={priorityVisibility}
                onClose={() => setPriorityVisibility(false)}
              />
              <Icon
                iconName="DashedCalendar"
                className="cursor-pointer"
                onClick={() => setCalenderVisibility(true)}
              />
              <DatePickerCard
                visible={calenderVisibility}
                onSelectFinishDate={(date) => setStartTask(date)} //TODO: handle selected finish date like 1402/12/25
                onSelectStartDate={(date) => setEndTask(date)} // TODO handle selected start date like 1402/12/15
                onClose={() => setCalenderVisibility(false)}
              />
              <Icon iconName="DashedTag" />
            </Flex>
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
  );
};
export default NewTask;
