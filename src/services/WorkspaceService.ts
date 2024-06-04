import APIClient from "./api-client";


export interface IWorkspace{
    name:string,
    color?:string
}

const WorkspaceService=<TData=IWorkspace,TResponse=IWorkspace>()=>{
return new APIClient<TData,TResponse>('/workspaces/');
}
export default WorkspaceService;

