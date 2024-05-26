import React, { useState, useContext, useRef } from "react";
import { BoardContext } from "../../layout/Board";
import CreateTaskModal from "../Modal/createTaskmodal";
import styles from "./styles.module.css";

interface ProjectProps {
  workspaceId: number;
  projectId: number;
  projectName: string;
  updateProjectName: any;
  deleteProject: any;
}

const EachProject: React.FC<ProjectProps> = ({
  workspaceId,
  projectId,
  projectName,
  updateProjectName,
  deleteProject,
}: ProjectProps) => {
  const {
    updateProjectNameState,
    UpdateProjectIdState,
    UpdateWorkspaceIdState,
    projectIdState,
  } = useContext(BoardContext);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isHover, setIsHover] = useState<boolean>(false);
  const buttonRef = useRef(null);

  const handleProjectClick = () => {
    updateProjectNameState(projectName);
    UpdateWorkspaceIdState(workspaceId);
    UpdateProjectIdState(projectId);
  };

  const handleButtonClick = () => {
    setIsTaskModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsTaskModalOpen(false);
  };

  const isActiveProject = projectIdState === projectId;

  return (
    <div>
      <button
        onClick={handleProjectClick}
        ref={buttonRef}
        className={`rk:text-white w-full ${
          isActiveProject ? "bg-blue-light" : ""
        }`}
      >
        <li
          key={projectId}
          className="relative flex justify-between items-center pr-4"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div>{projectName}</div>

          <button
            className={` ${
              isHover ? "visible" : "invisible"
            } text-black rounded`}
            onClick={handleButtonClick}
          >
            {" "}
            ...{" "}
          </button>
        </li>
      </button>

      {isTaskModalOpen && (
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
