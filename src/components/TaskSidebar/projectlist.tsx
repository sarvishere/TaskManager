import { useEffect } from "react";
import useProjects from "../../hooks/useProjects";
import EachProject from "./project";
import { Project } from "../../services/project-service";

interface ProjecListProps {
  workspaceId: number;
  projects: Project[];
}

const ProjectList = ({ workspaceId }: ProjecListProps) => {
  console.log("here");
  const { isLoading, projects, getProjects, error } = useProjects(workspaceId);
  // const { projects, getProjects, addProject } = useProjects(workspaceId);
  useEffect(() => {
    getProjects();
  }, [workspaceId]);

  console.log(projects);
  return (
    <div className="flex flex-col" onClick={(e) => e.stopPropagation()}>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <ul>
          {projects &&
            projects.map((project) => (
              <EachProject
                key={project.id}
                workspaceId={workspaceId}
                projectId={project.id}
                projectName={project.name}
              />
            ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectList;
