
import {useState} from 'react'
import WorkspaceService, { IWorkspace } from '../services/WorkspaceService';


const useWorkspaces = () => {
const [workspaces , setWorkspaces] = useState<IWorkspace[]>();
const [error , setError] = useState<Error>();
const [isLoading , setIsLoading] = useState(false);

interface UpdateWorkspaceData {
  name: string;
}


  const getWorkspaces = async () => {
    try {
      const response = await WorkspaceService<IWorkspace[]>().getAll();
      const fetchedworkspaces = response.data;
      setWorkspaces(fetchedworkspaces);
      return fetchedworkspaces;
    } catch (error) {
      setError(error as Error);
      throw error;
    } finally {
    }
  };


    const AddWorkspace=()=>{
        const addWorkspace=(data:IWorkspace)=>{
         setIsLoading(true);
         WorkspaceService().create(data).catch((err:Error)=>setError(err)).finally(()=>setIsLoading(false));
        }
        return {error,isLoading,addWorkspace}
    }

      const deleteWorkspace = async (workspaceId: number) => {
    try {
      await WorkspaceService().delete(workspaceId);
      const updatedWorkspace = await getWorkspaces();
      setWorkspaces(updatedWorkspace);
    } catch (error) {
      setError(error as Error);
      throw error;
    } finally {
      setIsLoading(false);
    }

  };

  const updateWorkspaceName = async (
    WorkspaceId: number,
    newWorkspaceName: string
  ) => {
    setIsLoading(true);
    try {
      const data: UpdateWorkspaceData = { name: newWorkspaceName };
      await WorkspaceService().patch(WorkspaceId, data);

      const updatedWorkspace = workspaces.map((workspace) => {
        if (workspace.id === WorkspaceId) {
          return { ...workspace, name: newWorkspaceName };
        }
        return workspace;
      });
      setWorkspaces(updatedWorkspace);
    } catch (error) {
      setError(error as Error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

    return{isLoading , workspaces , error , getWorkspaces, AddWorkspace , deleteWorkspace , updateWorkspaceName}
};

export default useWorkspaces

