import React, { useState } from "react";
import Icon from "../ui/Icon";

interface CreateProjectModalProps {
  onClose: () => void;
  workspaceId: number;
  onAddProject: (data: any, workspaceId: number) => void;
}

const CreateProjectModal: React.FC<CreateProjectModalProps> = ({
  onClose,
  workspaceId,
  onAddProject,
}: CreateProjectModalProps) => {
  const [newProject, setNewProject] = useState("");

  const handleAddProject = () => {
    onAddProject({ name: newProject }, workspaceId);
    onClose();
  };

  const handleClose = () => {
    onClose();
  };
  return (
    <div className="w-[184px] h-[204px] rounded-lg bg-white justify-center flex flex-col items-center">
      <button onClick={handleClose}>
        <Icon iconName="Close" />
      </button>

      <div>
        <div className="flex ">
          <button onClick={handleAddProject}>
            <Icon iconName="Add" />
          </button>
          <input
            type="text"
            placeholder=" ایجاد پروژه جدید"
            value={newProject}
            onChange={(e) => setNewProject(e.target.value)}
          />
        </div>

        <div className="flex mt-2">
          <Icon iconName="Edit" />
          <p> ویرایش نام ورک اسپیس</p>
        </div>

        <div className="flex mt-2">
          <Icon iconName="ColorPalette" />
          <p>  ویرایش رنگ</p>
        </div>

        <div className="flex mt-2">
          <Icon iconName="Link" />
          <p> کپی لینک</p>
        </div>

        <div className="flex mt-2">
          <Icon iconName="Remove" />
          <p> حذف</p>
        </div>
      </div>
      <div>
        <div className="flex mt-2">
          <button
            type="submit"
            className="submit-button w-[160px] h-[36px] rounded bg-[#208D8E] flex items-center justify-center"
          >
            <Icon iconName="Share" />
            <p className="ml-1"> اشتراک گذاری</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectModal;
