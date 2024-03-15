
import APIClient from "./api-client";

export interface Project {
  id: number;
  name: string;
}



const projectService = <TData = any, TResponse = Project>(
  workspaceId: number
) => new APIClient<TData, TResponse>(`/workspaces/${workspaceId}/projects/`);

export default projectService;