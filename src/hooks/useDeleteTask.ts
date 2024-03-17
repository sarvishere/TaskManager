import { useState } from "react";
import taskService from "../services/task-service";

const useDeleteTask = () => {
  const [error, setError] = useState<Error>();

  const deleteTask = (
    workspaceId: number,
    projectId: number,
    boardId: number,
    id: number
  ) => {
    taskService(workspaceId, projectId, boardId)
      .delete(id)
      .catch((error) => setError(error));
  };

  return { deleteTask, error };
};

export default useDeleteTask;
