import APIClient from "./api-client";
import { Task } from "./task-service";

export interface BoardResponse {
  id: number;
  name: string;
  order: number;
  tasks: Task[];
  tasks_count: number;
  is_archive: boolean;
  color: string;
}

export interface AddBoardData {
  name: string;
  order: number;
  is_archive: boolean;
  color: string;
}
export interface UpdateBoardData extends Partial<AddBoardData> {}

const boardService = <TData = BoardResponse, TResponse = BoardResponse>(
  workspaceId: number,
  projectId: number
) =>
  new APIClient<TData, TResponse>(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/`
  );

export default boardService;
