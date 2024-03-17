import APIClient from "./api-client";


export interface IWorkspace{
    id?:number,
    name:string,
    color:string
}

const addWorkspaceService=<TData=IWorkspace,TResponse=IWorkspace>()=>{
return new APIClient<TData,TResponse>('/workspaces/');
}
export default addWorkspaceService;