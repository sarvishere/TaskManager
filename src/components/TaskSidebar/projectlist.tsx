import useProjects from "../../hooks/useProjects";
import EachProject from "./project";
import { Project } from "../../services/project-service";

interface ProjectListProps {
  workspaceId: number;
  projects: Project[];
  updateProjectName: (
    workspaceId: number,
    projectId: number,
    name: string
  ) => void;
  deleteProject: (workspaceId: number, projectId: number) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({
  workspaceId,
  projects,
  updateProjectName,
  deleteProject,
}) => {
  const { isLoading, error } = useProjects(workspaceId);

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
                updateProjectName={updateProjectName}
                deleteProject={deleteProject}
              />
            ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectList;
