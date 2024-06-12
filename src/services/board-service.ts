import APIClient from "./api-client";
import { Task } from "./task-service";

export interface BoardResponse {
  id: number;
  name: string;
  tasks: Task[];
  tasks_count: number;
  color: string;
  is_archive?:boolean;
}

export interface AddBoardData {
  name: string;
  color: string;
  is_archive?:boolean;
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
