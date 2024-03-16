import { useState } from "react";
import taskService, { Task } from "../services/task-service";

const useTask = () => {
  const [tasks, setTasks] = useState<Task[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const getAllTasks = (
    workspace_id: number,
    project_id: number,
    board_id: number
  ) => {
    setIsLoading(true);
    taskService(workspace_id, project_id, board_id)
      .getAll()
      .then((res) => setTasks(res.data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  };
  return { getAllTasks, tasks, error, isLoading };
};

export default useTask;
