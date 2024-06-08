import { useEffect } from "react";
import useTask from "../../hooks/useTasks";
import { Task } from "../../services/task-service";
import moment from "jalali-moment";

interface TaskListProps {
  date: string;
  boardId: number;
  projectId: number;
  workspaceId: number;
}

const TaskCol = ({ date, workspaceId, projectId, boardId }: TaskListProps) => {
  const { getAllTasks, tasks, error } = useTask();

  useEffect(() => {
    getAllTasks(workspaceId, projectId, boardId);
  }, [workspaceId]);

  const convertToShamsi = (gregorianDate: string) => {
    return moment(gregorianDate, "YYYY-MM-DD")
      .locale("fa")
      .format("jYYYY/jMM/jDD");
  };

  const filteredTasks = tasks.filter((task: Task) => {
    const taskDateShamsi = convertToShamsi(task.deadline);
    return taskDateShamsi === date;
  });
  console.log(date);

  return (
    <div className="flex flex-col" onClick={(e) => e.stopPropagation()}>
      {error ? (
        <div>Error: {error.message}</div>
      ) : (
        <ul>
          {filteredTasks.map((task: Task) => (
            <div key={task.id}>
              <p>{convertToShamsi(task.deadline)}</p>
              <p>{task.name}</p>
              <p> {date}</p>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskCol;
