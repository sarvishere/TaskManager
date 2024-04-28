import React, { useState, useContext, useEffect } from "react";
// import useProjects from "../../hooks/useProjects";
import { BoardContext } from "../../layout/Board";
import CreateTaskModal from "../Modal/createTaskmodal";
import styles from "./styles.module.css";
import useProjects from "../../hooks/useProjects";
// import { Project } from "../../services/project-service";

interface ProjectProps {
  workspaceId: number;
  projectId: number;
  projectName: string;
}

const EachProject: React.FC<ProjectProps> = ({
  workspaceId,
  projectId,
  projectName,
}: ProjectProps) => {
  const { updateProjectName, deleteProject, getProjects } =
    useProjects(workspaceId);
  useEffect(() => {
    getProjects();
  }, [workspaceId]);

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
    e: React.MouseEvent<HTMLButtonElement>
    // id: number,
    // name: string
  ) => {
    // setSelectedProjectForTask({ id, name });
    setIsTaskModalOpen(true);
    // setSelectedProjectWorkspaceForEdit({ id: workspaceId });
    e.stopPropagation();
  };

  const handleCloseModal = () => {
    setIsTaskModalOpen(false);
    // setSelectedProjectForTask(null);
  };

  return (
    <div>
      <li key={projectId} className={projectName.length > 0 ? "mr-5 pt-2" : ""}>
        <div
          className="group flex justify-between"
          onMouseEnter={() => setIsHovering(projectId)}
          onMouseLeave={() => setIsHovering(null)}
        >
          <button
          // id={`project-${projectId}`}
          // onClick={() => handleButtonClick(projectId, projectName)}
          // className={`px-4 py-2 transition-colors duration-300 ease-in-out ${
          //   selectedProjectId === projectId ? "active" : ""
          // }`}
          >
            {projectName}
          </button>

          {isHovering === projectId && (
            <button
              onClick={(e) =>
                handleInnerButtonClick(
                  e
                  // , projectId, projectName
                )
              }
              className={`${
                selectedProjectId === projectId && selected
                  ? "bg-[#E9F9FF]"
                  : ""
              }`}
            >
              ...
            </button>
          )}
        </div>
      </li>

      {isTaskModalOpen && (
        //  && selectedProjectForTask
        <div className={styles["modal"]}>
          <CreateTaskModal
            projectId={projectId}
            projectName={projectName}
            onClose={handleCloseModal}
            workspaceId={workspaceId}
            onDeleteProject={deleteProject}
            onUpdateProjectName={updateProjectName}
          />
        </div>
      )}
    </div>
  );
};

export default EachProject;
