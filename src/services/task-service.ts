import APIClient from "./api-client";

export interface Task {
  id: number;
  name: string;
  description: string;
  deadline: string;
}

export interface AddTaskData {
  name: string;
  description: string;

}

const taskService = <TData = any, TResponse = Task>(
  workspace_id: number,
  project_id: number,
  board_id: number
) =>
  new APIClient<TData, TResponse>(
    `/workspaces/${workspace_id}/projects/${project_id}/boards/${board_id}/tasks/`
  );

export default taskService;
