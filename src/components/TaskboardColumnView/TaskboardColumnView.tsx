import Button from "../ui/Button";
import Flex from "../ui/Flex";
import Icon from "../ui/Icon";
import Seperator from "../ui/Seperator";
import TaskBoardToolbar from "./TaskBoardToolbar/TaskBoardToolbar";
import TaskCard from "./TaskCard/TaskCard";
import TaskColumnHeader from "./TaskColumnHeader/TaskColumnHeader";

const TaskboardColumnView = () => {
  return (
    <div className="relative w-full min-h-full">
      <TaskBoardToolbar />
      <Seperator orientation="vertically" />
      <div className="w-full h-full content-around grid grid-cols-[repeat(4,250px)] gap-4 gap-y-4">
        <Flex direction="col" gap="S">
          <TaskColumnHeader
            className="border-yellow-primary"
            columnTitle={"Open"}
          />
          <Flex direction="col" className="gap-3">
            <TaskCard />
            <TaskCard />
            <Button
              className="flex justify-center gap-1 border-2 items-center py-2 px-3"
              size="full"
              variant="outline"
              color="brand"
            >
              <Icon iconName="SquarePlus" stroke="#208D8E" />
              ساختن تسک جدید
            </Button>
          </Flex>
        </Flex>
        <Flex direction="col" gap="S">
          <TaskColumnHeader
            className="border-brand-primary"
            columnTitle={"Open"}
          />
          <Flex direction="col" className="gap-3">
            <TaskCard />
            <TaskCard />
          </Flex>
        </Flex>
        <Flex direction="col" gap="S">
          <TaskColumnHeader
            className="border-blue-primary"
            columnTitle={"Open"}
          />
          <Flex direction="col" className="gap-3">
            <TaskCard />
            <TaskCard />
          </Flex>
        </Flex>
        <Flex direction="col" gap="S">
          <TaskColumnHeader
            className="border-pink-primary"
            columnTitle={"Open"}
          />
          <Flex direction="col" className="gap-3">
            <TaskCard />
            <TaskCard />
          </Flex>
        </Flex>
      </div>
      <Button
        color="brand"
        className="absolute -bottom-[10%] left-[3%] flex gap-1 items-center"
      >
        <Icon iconName="SquarePlus" />
        تسک جدید
      </Button>
    </div>
  );
};

export default TaskboardColumnView;
