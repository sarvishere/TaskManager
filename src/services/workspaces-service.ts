import APIClient from './api-client'

export interface IWorkspaces {
  id: number,
  name: string,
  color: string
}

const workspacesService= <TData = any , TResponse = IWorkspaces > () => {
  return (
    new APIClient <TData , TResponse> (
      `/workspaces/` 
      )
  )
    }
 


export default workspacesService;