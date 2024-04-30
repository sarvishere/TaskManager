import useProjects from "../../hooks/useProjects";
import EachProject from "./project";
import { Project } from "../../services/project-service";

interface ProjecListProps {
  workspaceId: number;
  projects: Project[];
  updateProjectName: any;
  deleteProject: any;
}

const ProjectList = ({
  workspaceId,
  projects,
  updateProjectName,
  deleteProject,
}: ProjecListProps) => {
  const { isLoading, error } = useProjects(workspaceId);
  // console.log("here in projectlist", projects, workspaceId);

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
