import React, { useState, useContext } from "react";
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
  const { updateProjectNameState } = useContext(BoardContext);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleProjectClick = () => {
    updateProjectNameState(projectName);
  };

  const handleButtonClick = () => {
    setIsTaskModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsTaskModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleProjectClick}
        className="
        focus:bg-blue-light rk:text-white w-full"
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
            }  text-black rounded  `}
            onClick={handleButtonClick}
          >
            {" "}
            ...{" "}
          </button>

          {/* </div> */}
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
