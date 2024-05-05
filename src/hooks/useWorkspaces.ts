
import {useState} from 'react'
import WorkspaceService, { IWorkspace } from '../services/WorkspaceService';


const useWorkspaces = () => {
const [workspaces , setWorkspaces] = useState<IWorkspace[]>();
const [error , setError] = useState<Error>();
const [isLoading , setIsLoading] = useState(false);

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


    return{isLoading , workspaces , error , getWorkspaces, AddWorkspace , deleteWorkspace}
};

export default useWorkspaces




//   const updateProjectName = async (
//     workspaceId: number,
//     projectId: number,
//     newProjectName: string
//   ) => {
//     setIsLoading(true);
//     try {
//       const data: UpdateProjectData = { name: newProjectName };
//       await projectService(workspaceId).patch(projectId, data);

//       const updatedProjects = projects.map((project) => {
//         if (project.id === projectId) {
//           return { ...project, name: newProjectName };
//         }
//         return project;
//       });
//       setProjects(updatedProjects);
//     } catch (error) {
//       setError(error as Error);
//       throw error;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return {
//     projects,
//     error,
//     isLoading,
//     getProjects,
//     addProject,
//     deleteProject,
//     updateProjectName,
//   };
// };

// export default useProjects;
