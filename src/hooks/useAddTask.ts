import { useState } from "react";
import taskService, { AddTaskData, Task } from "../services/task-service";

const useAddTask = () => {
  const [error, setError] = useState<Error>();
  const [task, setTask] = useState<Task>();

  const addTask = (
    workspaceId: number,
    projectId: number,
    boardId: number,
    task: AddTaskData
  ) => {
    const formData = new FormData();
    for (const [key, value] of Object.entries(task))
      formData.append(key, value);

    taskService<FormData, Task>(workspaceId, projectId, boardId)
      .create(formData, { headers: { "Content-Type": "multipart/form-data" } })
      .then((res) => setTask(res.data))
      .catch((error) => setError(error));
  };

  return { addTask, task, error };
};

export default useAddTask;
