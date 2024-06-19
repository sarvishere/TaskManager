import Header from "./Header";
import TaskCard from "../TaskCard/TaskCard";

interface ColumnProps {
  handleDeleteBoard: (id: number) => void;
  handleUpdateBoard: (title: string, id: number) => void;
  bordId: number;
  boardColor: string;
  boardTask: number;
  boardName: string;
  boardTasks: any[];
  tasks: any;
  setTasks: any;
}

const Column = ({
  handleDeleteBoard,
  handleUpdateBoard,
  bordId,
  boardColor,
  boardTask,
  boardName,
  boardTasks,
  tasks,
  setTasks,
}: ColumnProps) => {
  return (
    <div>
      <Header
        handleDeleteBoard={handleDeleteBoard}
        handleUpdateBoard={handleUpdateBoard}
        bordId={bordId}
        boardColor={boardColor}
        boardTask={boardTask}
        boardName={boardName}
        setTasks={setTasks}
        boardTasks={boardTasks}
      />
      {tasks &&
        tasks.map((task: any, index: any) => (
          <TaskCard
            key={task.id}
            index={index}
            boardId={bordId}
            setTasks={setTasks}
            taskName={task.name}
            taskDeadline={task.deadline}
            taskDes={task.description}
            taskId={task.id}
          />
        ))}
    </div>
  );
};

export default Column;
