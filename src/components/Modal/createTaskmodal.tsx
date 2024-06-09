import React, { useState } from "react";
import Icon from "../ui/Icon";

interface CreateTaskModalProps {
  onClose: () => void;
  projectId: number;
  projectName: string;
  workspaceId: number;
  onDeleteProject: (workspaceId: number, projectId: number) => void;
  onUpdateProjectName: (
    workspaceId: number,
    projectId: number,
    newProjectName: string
  ) => void;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({
  onClose,
  projectId,
  projectName,
  workspaceId,
  onDeleteProject,
  onUpdateProjectName,
}) => {
  const [newProjectName, setNewProjectName] = useState(projectName);
  const [showNewTask, setShowNewTask] = useState(false);

  const handleClose = () => {
    onClose();
  };

  const handleTask = () => {
    setShowNewTask(true);
  };

  const handleUpdateProjectName = () => {
    onUpdateProjectName(workspaceId, projectId, newProjectName);
    onClose();
  };

  const handleDeleteProject = () => {
    onDeleteProject(workspaceId, projectId);
    handleClose();
  };

  return (
    <div className="modal-container">
      <div
        className="modal-content"
        style={{ boxShadow: "0px 4px 16px 0px #00000029" }}
      >
        <button onClick={handleClose}>
          <Icon
            iconName="Close"
            style={{
              background: "transparent",
              border: "1px solid #AAAAAA",
              borderRadius: "50%", // Ensure the border radius makes it circular
              width: "30px",
              height: "30px",
              padding: "0", // Remove padding to ensure the button fits the icon properly
              cursor: "pointer",
            }}
          />
        </button>
        <div>
          {showNewTask ? (
            <h1> must show new task</h1>
          ) : (
            // <NewTask
            //   onClose={function (): void {
            //     throw new Error("Function not implemented.");
            //   }}
            // />
            <div className="flex ">
              <button onClick={handleTask}>
                <Icon iconName="Add" />
              </button>
              <p> ساخت تسک جدید </p>
            </div>
          )}

          <div className="flex mt-2">
            <button onClick={handleUpdateProjectName}>
              <Icon iconName="Edit" />
            </button>
            <input
              type="text"
              placeholder="نام جدید پروژه"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
            />
          </div>

          <div className="flex mt-2">
            <button onClick={handleDeleteProject}>
              <Icon iconName="Remove" />
            </button>
            <p> حذف</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskModal;
