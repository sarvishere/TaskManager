import React, { useEffect, useState } from "react";
import Icon from "../ui/Icon";
import useAddBoard from "../../hooks/useAddBoard";
import Button from "../ui/Button";

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
  handleAddBoard: (newBoard: any) => void;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({
  onClose,
  projectId,
  projectName,
  workspaceId,
  onDeleteProject,
  onUpdateProjectName,
  handleAddBoard,
}) => {
  const [newProjectName, setNewProjectName] = useState(projectName);
  const [newName, setNewName] = useState("");
  const [boardColor, setBoardColor] = useState("");
  const [showNewTask, setShowNewTask] = useState(false);

  const { addBoard } = useAddBoard();

  const handleModal = () => {
    setShowNewTask(true);
  };

  const handleUpdateProjectName = () => {
    onUpdateProjectName(workspaceId, projectId, newProjectName);
    onClose();
  };

  const handleDeleteProject = () => {
    onDeleteProject(workspaceId, projectId);
    onClose();
  };

  const handleCreateBoard = () => {
    if (newName && boardColor) {
      addBoard(workspaceId, projectId, {
        name: newName,
        color: boardColor,
      });

      onClose();
    } else {
      alert("Please enter a board name and select a color.");
    }
    // handleAddBoard(newboard);
  };

  return (
    <div className="modal-container">
      <div
        className="modal-content"
        style={{ boxShadow: "0px 4px 16px 0px #00000029" }}
      >
        <button onClick={onClose}>
          <Icon
            iconName="Close"
            style={{
              background: "white",
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
          <div className="flex">
            <button onClick={handleModal}>
              <Icon iconName="Add" />
            </button>
            <input
              type="text"
              placeholder=" ایجاد برد جدید"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>

          {showNewTask && (
            <div>
              <div className="flex mt-2 gap-2">
                <button
                  onClick={() => setBoardColor("red")}
                  style={{
                    backgroundColor: "red",
                    width: "30px",
                    height: "30px",
                    borderRadius: "50px",
                    border: boardColor === "red" ? "2px solid black" : "none",
                  }}
                ></button>
                <button
                  onClick={() => setBoardColor("yellow")}
                  style={{
                    backgroundColor: "yellow",
                    width: "30px",
                    height: "30px",
                    borderRadius: "50px",
                    border:
                      boardColor === "yellow" ? "2px solid black" : "none",
                  }}
                ></button>
                <button
                  onClick={() => setBoardColor("green")}
                  style={{
                    backgroundColor: "green",
                    width: "30px",
                    height: "30px",
                    borderRadius: "50px",
                    border: boardColor === "green" ? "2px solid black" : "none",
                  }}
                ></button>
              </div>

              <Button
                className="items-center flex mt-2 "
                onClick={handleCreateBoard}
                color="brand"
                variant="primary"
                size="small"
                weight="200"
                fontSize="S"
              >
                Create Board
              </Button>
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
