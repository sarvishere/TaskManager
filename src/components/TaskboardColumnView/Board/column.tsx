import TaskCard from "../TaskCard/TaskCard";

interface ColumnProps {
  handleDeleteBoard: (id: number) => void;
  handleUpdateBoard: (title: string, id: number) => void;
  boardId: number;
  boardColor: string;
  boardTask: number;
  boardName: string;
  boardTasks: any[];
  tasks: any;
  setTasks: any;
}

const Column = ({ boardId, tasks, setTasks }: ColumnProps) => {
  return (
    <div>
      {tasks &&
        tasks.map((task: any, index: any) => (
          <TaskCard
            key={task.id}
            index={index}
            boardId={boardId}
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
