
import {useState} from 'react'

import workspacesService,{ IWorkspaces } from "../services/workspaces-service";


const useWorkspaces = () => {
const [workspaces , setWorkspaces] = useState<IWorkspaces[]>([
  {
    "id": 0,
    "name": "string",
    "color": "string"
  }
]);
const [error , setError] = useState<Error>();
const [isLoading , setIsLoading] = useState(false);

interface UpdateWorkspaceData {
  name: string;
}


  const getWorkspaces = async () => {
    try {
      const response = await workspacesService<IWorkspaces[]>().getAll();
      const fetchedworkspaces = response.data;
      setWorkspaces(fetchedworkspaces);
      return fetchedworkspaces;
    } catch (error) {
      setError(error as Error);
      throw error;
    } finally {
    }
  };




      const deleteWorkspace = async (workspaceId: number) => {
    try {
      await workspacesService().delete(workspaceId);
      const updatedWorkspace = await getWorkspaces();
      setWorkspaces(updatedWorkspace);
    } catch (error) {
      setError(error as Error);
      throw error;
    } finally {
      setIsLoading(false);
    }

  };


  const updateWorkspaceName = async (WorkspaceId: number, newWorkspaceName: string) => {
    setIsLoading(true);
    try {
      const data: UpdateWorkspaceData = { name: newWorkspaceName };
      await workspacesService().patch(WorkspaceId, data);

      if (workspaces) {
        const updatedWorkspace = workspaces.map((workspace) => {
          if (workspace.id === WorkspaceId) {
            return { ...workspace, name: newWorkspaceName };
          }
          return workspace;
        });
        setWorkspaces(updatedWorkspace);
      } else {
        console.warn("Workspaces are undefined");
      }
    } catch (error) {
      setError(error as Error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };


    return{isLoading ,setWorkspaces, workspaces , error , getWorkspaces , deleteWorkspace , updateWorkspaceName}
};

export default useWorkspaces

