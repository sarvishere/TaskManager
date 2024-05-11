import React, { useEffect, useState } from "react";
import Icon from "../ui/Icon";
import useAuth from "../../hooks/useAuth";
import WorkspacesList from "./workspacelist";
import { Link, useNavigate } from "react-router-dom";
import Accordion from "../Accordion/Accordion";
import useWorkspaces from "../../hooks/useWorkspaces";
import WorkspaceButton from "../Modal/WS/workspaceButton";

const getFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase();
};

const TaskSidebar: React.FC = () => {
  const { user, logout } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    // e.stopPropagation();
    setShowModal(!showModal);
  };

  const {
    deleteWorkspace,
    getWorkspaces,
    workspaces,
    updateWorkspaceName,
    AddWorkspace,
  } = useWorkspaces();
  useEffect(() => {
    getWorkspaces();
  }, []);

  const handleCreateWorkspace = (name: string, color: string) => {
    AddWorkspace({ name, color });
    setShowModal(!showModal);
    getWorkspaces();
  };
  return (
    <div
      dir="rtl"
      className="flex flex-col w-[340px] h-[999px] border-l-[0.5px] border-[#AAAAAA] pr-12 font-iranyekan"
    >
      <div className=" mt-10 flex ">
        <h1
          style={{
            backgroundImage: "linear-gradient(to right, #118C80, #4AB7D8)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          className="text-lh font-iranyekan font-black"
        >
          کوئرا تسک منیجر
        </h1>
      </div>
      <div className="w-[274px]">
        <Accordion
          id="workspaces"
          head={
            <div className="flex justify-between">
              <p className="font-black text-base">ورک اسپیس‌ها</p>
              <Icon iconName={"ChevronDown"} />
            </div>
          }
        >
          <div className="relative w-full h-[40px] mt-[16px]">
            <input
              className=" w-full h-full bg-gray-secondary pr-9 rounded-[5px]"
              placeholder=" جستجو کنید"
            />
            <button
              className="absolute top-1/2 transform -translate-y-1/2 right-3 "
              type="button"
            >
              <Icon iconName="Search" />
            </button>
          </div>
          <div>
            <button
              onClick={toggleModal}
              className="flex bg-[#D3D3D3] h-[32px] rounded-[6px] justify-center items-center mt-[16px] w-[274px]"
            >
              <Icon iconName="SquarePlus" />
              <h3 className="font-iranyekan font-normal text-[12px] ">
                {" "}
                ساختن ورک‌اسپیس جدید
              </h3>
            </button>
          </div>
          <WorkspacesList
            workspaces={workspaces}
            deleteWorkspace={deleteWorkspace}
            updateWorkspaceName={updateWorkspaceName}
          />
        </Accordion>
      </div>
      <div className=" flex flex-col p-12  mt-auto">
        {user && (
          <div className="flex items-center gap-2">
            <div className="w-[36px] h-[36px] flex justify-center items-center bg-gray-secondary rounded-full mr-[8px]">
              <span className="text-white font-bold font-iranyekan">
                {user.first_name && getFirstLetter(user.first_name)}
                {user.last_name && getFirstLetter(user.last_name)}
              </span>
            </div>
            <Link to="/profile">{user.username}</Link>
          </div>
        )}
        <div className="flex  text-[#818181] mt-4">
          <Icon iconName="Logout" />
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            {" "}
            خروج{" "}
          </button>
        </div>
      </div>
      <div>
        {showModal && (
          <WorkspaceButton
            onClose={toggleModal}
            addWorkspace={handleCreateWorkspace}
          />
        )}
      </div>
    </div>
  );
};

export default TaskSidebar;
