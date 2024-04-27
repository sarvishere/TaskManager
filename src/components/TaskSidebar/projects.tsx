import React, { useState, useContext } from "react";
import useProjects from "../../hooks/useProjects";
import { BoardContext } from "../../layout/Board";
import CreateTaskModal from "../Modal/createTaskmodal";
import styles from "./styles.module.css";
import { Project } from "../../services/project-service";

interface ProjectProps {
  workspaceId: number;
  projects: Project[];
}

const Projects: React.FC<ProjectProps> = ({
  workspaceId,
  projects,
}: ProjectProps) => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );
  const [selected, setSelected] = useState<boolean>(false);
  const { updateProjectNameState } = useContext(BoardContext);
  const [selectedProjectForTask, setSelectedProjectForTask] = useState<{
    id: number;
    name: string;
  } | null>(null);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [selectedProjectWorkspaceForEdit, setSelectedProjectWorkspaceForEdit] =
    useState<{
      id: number;
    }>({ id: 0 });
  const [isHovering, setIsHovering] = useState<number | null>(null);

  const { isLoading, error, updateProjectName, deleteProject, getProjects } =
    useProjects(workspaceId);

  const handleButtonClick = (id: number, name: string) => {
    const prevSelectedButton = document.querySelector(".active");
    if (prevSelectedButton) {
      prevSelectedButton.classList.remove("active");
    }
    setSelectedProjectId(id);
    updateProjectNameState(name);

    const currentButton = document.getElementById(`project-${id}`);
    if (currentButton) {
      currentButton.classList.add("active");
    }
    setSelected(true);
  };

  const handleInnerButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number,
    name: string
  ) => {
    setSelectedProjectForTask({ id, name });
    setIsTaskModalOpen(true);
    setSelectedProjectWorkspaceForEdit({ id: workspaceId });
    e.stopPropagation();
  };

  const handleCloseModal = () => {
    setIsTaskModalOpen(false);
    setSelectedProjectForTask(null);
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {projects && (
        <ul>
          {projects.map((project) => (
            <li
              key={project.id}
              className={projects.length > 0 ? "mr-5 pt-2" : ""}
            >
              <div
                className="group flex justify-between"
                onMouseEnter={() => setIsHovering(project.id)}
                onMouseLeave={() => setIsHovering(null)}
              >
                <button
                  id={`project-${project.id}`}
                  onClick={() => handleButtonClick(project.id, project.name)}
                  className={`px-4 py-2 transition-colors duration-300 ease-in-out ${
                    selectedProjectId === project.id ? "active" : ""
                  }`}
                >
                  {project.name}
                </button>

                {isHovering === project.id && (
                  <button
                    onClick={(e) =>
                      handleInnerButtonClick(e, project.id, project.name)
                    }
                    className={`${
                      selectedProjectId === project.id && selected
                        ? "bg-[#E9F9FF]"
                        : ""
                    }`}
                  >
                    ...
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}

      {isTaskModalOpen && selectedProjectForTask && (
        <div className={styles["modal"]}>
          <CreateTaskModal
            projectId={selectedProjectForTask.id}
            projectName={selectedProjectForTask.name}
            onClose={handleCloseModal}
            workspaceId={selectedProjectWorkspaceForEdit.id}
            onDeleteProject={deleteProject}
            onUpdateProjectName={updateProjectName}
            projects={[]}
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
