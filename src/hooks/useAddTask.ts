import { useState } from "react";
import taskService, { AddTaskData, Task } from "../services/task-service";

const useAddTask = () => {
  const [error, setError] = useState<Error | null>(null);
  const [task, setTask] = useState<Task | null>(null);

  const addTask = (
    workspaceId: number,
    projectId: number,
    boardId: number,
    task: AddTaskData
  ): Promise<Task> => {
    const formData = new FormData();
    for (const [key, value] of Object.entries(task)) {
      formData.append(key, value);
    }

    return taskService<FormData, Task>(workspaceId, projectId, boardId)
      .create(formData, { headers: { "Content-Type": "multipart/form-data" } })
      .then((res) => {
        setTask(res.data);
        return res.data;
      })
      .catch((error) => {
        setError(error);
        throw error; // rethrow the error to handle it in the component
      });
  };

  return { addTask, task, error };
};

export default useAddTask;

