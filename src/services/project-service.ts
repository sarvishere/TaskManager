
import APIClient from "./api-client";

export interface Project {
  id?: number;
  name: string;
}

const projectService = <TData = Project, TResponse = Project>(
  workspaceId: number,
) => new APIClient<TData, TResponse>(`/workspaces/${workspaceId}/projects/`);

export default projectService;