import TaskCard from "../TaskCard/TaskCard";

interface ColumnProps {
  handleDeleteBoard: (id: number) => void;
  handleUpdateBoard: (title: string, id: number) => void;
  boardId: number;
  boardColor: string;
  boardTask: number;
  boardName: string;
  boardTasks: any[];
  tasks: any[];
  setTasks: React.Dispatch<React.SetStateAction<any[]>>;
  deletedTasks: any; // Ensure deletedTasks is properly typed
}

const Column = ({ boardId, tasks, setTasks, deletedTasks }: ColumnProps) => {
  const filteredTasks = tasks.filter((task) => !deletedTasks.includes(task.id));

  console.log(filteredTasks);
  return (
    <div>
      {filteredTasks.map((task, index) => (
        <TaskCard
          key={task.id}
          index={index}
          boardId={boardId}
          setTasks={setTasks} // Ensure this is properly used if needed
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
