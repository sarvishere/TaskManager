import React, { useState } from "react";
import First from "./firstModal";
import Second from "./secondModal";
import Third from "./thirdModal";
import Icon from "../../ui/Icon";
// import { IWorkspace } from "../../../services/WorkspaceService";

interface WBModalProps {
  onClose: () => void;
  addWorkspace: any;
}

const WorkspaceButton: React.FC<WBModalProps> = ({
  onClose,
  addWorkspace,
}: // workspaces,
WBModalProps) => {
  const [firstModalOpen, setFirstModalOpen] = useState(true);
  const [secondModalOpen, setSecondModalOpen] = useState(false);
  const [thirdModalOpen, setThirdModalOpen] = useState(false);
  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaceColor, setWorkspaceColor] = useState("");

  const handleFirstModalSubmit = (value: string) => {
    console.log("First modal submitted with value:", value);
    setWorkspaceName(value);
    setFirstModalOpen(false);
    setSecondModalOpen(true);
  };

  const handleSecondModalSubmit = (color: string) => {
    console.log("Second modal submitted with color:", color);
    setWorkspaceColor(color);
    setSecondModalOpen(false);
    setThirdModalOpen(true);
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center ">
      <div className="bg-white p-4 rounded shadow-lg">
        <div className="flex items-center">
          <button className="close" onClick={onClose}>
            <Icon iconName="Close" />
          </button>
          <h1 className="mr-[70px] font-black text-2xl">
            {firstModalOpen && "ساختن ورک‌اسپیس جدید‌"}
            {secondModalOpen && "انتخاب رنگ ورک‌اسپیس"}
            {thirdModalOpen && "مرور اطلاعات"}
          </h1>
        </div>
        <div>
          <First
            isOpen={firstModalOpen}
            buttonText="ادامه"
            onSubmit={handleFirstModalSubmit}
          />
          <Second
            isOpen={secondModalOpen}
            buttonText="ادامه"
            onSubmit={handleSecondModalSubmit}
          />
          <Third
            isOpen={thirdModalOpen}
            onSubmit={addWorkspace}
            buttonText="ساختن ورک‌اسپیس"
            workspaceName={workspaceName}
            workspaceColor={workspaceColor}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkspaceButton;
