
import {useState } from "react";
import projectService, { Project } from "../services/project-service";

const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>();
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(false);

 const getProjects = (workspaceId: number) => {

    setIsLoading(true);
    projectService(workspaceId)
      .getAll()
      .then((res) => setProjects(res.data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));

}
const addProject=(workspaceId: number,data)=>{
  setIsLoading(true);
  projectService(workspaceId)
    .create(workspaceId,data)
    .then((res) => setProjects(res.data))
    .catch((error) => setError(error))
    .finally(() => setIsLoading(false));

}
  return { projects, error, isLoading , getProjects,addProject};
};

export default useProjects;

