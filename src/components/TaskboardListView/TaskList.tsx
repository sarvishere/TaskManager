import { useEffect } from "react";
import TaskItem from "./TaskItem";
import useTask from "../../hooks/useTasks";

interface TaskListProps {
  workspaceId: number;
  projectId: number;
  boardId: number;
  boardColor: string;
}

const TaskList = ({
  workspaceId,
  projectId,
  boardId,
  boardColor,
}: TaskListProps) => {
  const { getAllTasks, tasks, isLoading, error } = useTask();

  useEffect(() => {
    getAllTasks(workspaceId, projectId, boardId);
  }, [workspaceId, projectId, boardId]);

  return (
    <div>
      <div className="flex flex-col" onClick={(e) => e.stopPropagation()}>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <ul>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                boardColor={boardColor}
                taskDeadline={task.deadline}
                TaskName={task.name}
                Description={task.description}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TaskList;
