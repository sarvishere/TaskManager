import React from "react";
import Icon from "../../ui/Icon";
import Button from "../../ui/Button";

interface ChangeTaskProps {
  onClose: () => void;
  handleonDelete: () => void;
}

const ChangeTask = ({ onClose, handleonDelete }: ChangeTaskProps) => {
  // const [newName, setNewName] = useState("");

  // const handleUpdateTaskName = () => {
  //   onUpdateProjectName(workspaceId, projectId, newProjectName);
  //   onClose();
  // };

  // const handleTask = () => {
  //   onDeleteProject(workspaceId, projectId);
  //   onClose();
  // };

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

        <div className="flex mt-2">
          {/* <button onClick={}>
              <Icon iconName="Edit" />
            </button> */}
          <input
            type="text"
            placeholder="نام جدید پروژه"
            // value={newProjectName}
            // onChange={(e) => setNewProjectName(e.target.value)}
          />
        </div>

        <div className="flex mt-2">
          {/* <button onClick={handleDeleteProject}>
              <Icon iconName="Remove" />
            </button> */}
          <p>حذف</p>
        </div>
      </div>
    </div>
  );
};

export default ChangeTask;
