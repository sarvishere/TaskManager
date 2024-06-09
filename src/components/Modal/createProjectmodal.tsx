import React, { useState } from "react";
import Icon from "../ui/Icon";

interface CreateProjectModalProps {
  onClose: () => void;
  workspaceId: number;
  workspaceName: string;
  onAddProject: (data: any, workspaceId: number) => void;
  onDeleteWorkspace: (workspaceId: number) => void;
  onUpdateWorkspaceName: (
    workspaceId: number,
    newWorkspaceName: string
  ) => void;
}

const CreateProjectModal: React.FC<CreateProjectModalProps> = ({
  onClose,
  workspaceId,
  workspaceName,
  onAddProject,
  onDeleteWorkspace,
  onUpdateWorkspaceName,
}: CreateProjectModalProps) => {
  const [newWorkspaceName, setNewWorkspaceName] = useState(workspaceName);
  const [newProject, setNewProject] = useState("");

  const handleAddProject = () => {
    onAddProject({ name: newProject }, workspaceId);
    onClose();
  };

  const handleDeleteWorkspace = () => {
    onDeleteWorkspace(workspaceId);
    onClose();
  };

  const handleUpdateWorkspaceName = () => {
    onUpdateWorkspaceName(workspaceId, newWorkspaceName);
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <button onClick={handleClose}>
          <Icon
            iconName="Close"
            style={{
              background: "transparent",
              border: "1px solid #AAAAAA",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              padding: "0",
              cursor: "pointer",
            }}
          />
        </button>
        <div>
          <div className="flex ">
            <button onClick={handleAddProject}>
              <Icon iconName="Add" />
            </button>
            <input
              type="text"
              placeholder=" ایجاد پروژه جدید"
              value={newProject}
              onChange={(e) => setNewProject(e.target.value)}
            />
          </div>

          <div className="flex mt-2">
            <button onClick={handleUpdateWorkspaceName}>
              <Icon iconName="Edit" />
            </button>
            <input
              type="text"
              placeholder=" ویرایش نام ورک اسپیس "
              value={newWorkspaceName}
              onChange={(e) => setNewWorkspaceName(e.target.value)}
            />
          </div>

          <div className="flex mt-2">
            <button onClick={handleDeleteWorkspace}>
              <Icon iconName="Remove" />
            </button>
            <p> حذف</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectModal;
