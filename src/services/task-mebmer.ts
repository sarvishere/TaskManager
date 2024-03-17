import { User } from "../hooks/useAuth";
import APIClient from "./api-client";

export interface Member {
  id: number;
  user: User;
}

const taskMemberService = <TData = any, TResponse = Member>(
  workspaceId: number,
  projectId: number,
  boardId: number,
  taskId: number
) =>
  new APIClient<TData, TResponse>(
    `/workspaces/${workspaceId}/projects/${projectId}/boards/${boardId}/tasks/${taskId}/assignee/`
  );

export default taskMemberService;
