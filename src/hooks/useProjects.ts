
import {useState } from "react";
import projectService, { Project } from "../services/project-service";

const useProjects = (workspaceId: number) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(false);


  const getProjects = async () => {
    try {
      const response = await projectService<Project[]>(workspaceId).getAll();
      const fetchedProjects = response.data;
      setProjects(fetchedProjects);
      return fetchedProjects; 
    } catch (error) {
      setError(error as Error);
      throw error; 
    } finally {
      setIsLoading(false);
    }
  };


  const addProject = async (data: Project, workspaceId: number) => {
    setIsLoading(true);
    try {
      const response = await projectService<Project, Project>(workspaceId).create(data);
      const newProject = response.data;
      setProjects([...projects, newProject]);

    } catch (error) {
      setError(error  as Error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };


  const deleteProject = async (workspaceId: number, projectId: number) => {
    try {
      await projectService(workspaceId).delete(projectId);
      const updatedProjects = await getProjects(); 
      setProjects(updatedProjects);
    } catch (error) {
      setError(error  as Error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateProjectName = async (
    workspaceId: number,
    projectId: number,
    newProjectName: string
  ) => {
    setIsLoading(true);
    try {
      const data: Project = { name: newProjectName }; 
      await projectService(workspaceId).patch(projectId, data);

      const updatedProjects = projects.map(project => {
        if (project.id === projectId) {
          return { ...project, name: newProjectName }; 
        }
        return project;
      });
      setProjects(updatedProjects);
    } catch (error) {
      setError(error as Error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  

  return { projects, error, isLoading, getProjects, addProject, deleteProject, updateProjectName };
};

export default useProjects;
