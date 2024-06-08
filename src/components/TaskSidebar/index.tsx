import { useState } from "react";
import Icon from "../ui/Icon";
import useAuth from "../../hooks/useAuth";
import WorkspacesList from "./workspacelist";
import { Link, useNavigate } from "react-router-dom";
import Accordion from "../Accordion/Accordion";
import WorkspaceButton from "../Modal/WS/workspaceButton";
import { IWorkspaces } from "../../services/workspaces-service";
import { IWorkspace } from "../../services/WorkspaceService";
import logo from "../../assets/images/project.png";
import Head from "../TaskboardListView/TaskProject";

interface TaskSidebarProps {
  workspaces: IWorkspaces[] | IWorkspace[];
  deleteWorkspace: any;
  updateWorkspaceName: any;
  AddWorkspace: any;
  setWorkspaces: any;
}

const getFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase();
};

const TaskSidebar = ({
  workspaces,
  deleteWorkspace,
  updateWorkspaceName,
  AddWorkspace,
  setWorkspaces,
}: TaskSidebarProps) => {
  const { user, logout } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleCreateWorkspace = (name: string, color: string) => {
    AddWorkspace({ name, color });
    setShowModal(!showModal);
    const newWorkspace: IWorkspaces = {
      id: workspaces.length + 1,
      name,
      color,
    };
    const updatedWorkspaces = [...workspaces, newWorkspace];
    setWorkspaces(updatedWorkspaces);
  };

  return (
    <div
      dir="rtl"
      className="flex flex-col w-[340px] h-[999px] border-l-[0.5px] border-[#AAAAAA] pr-12 font-iranyekan"
    >
      <div className=" mt-10 flex items-center">
        <h1
          style={{
            backgroundImage: "linear-gradient(to right, #118C80, #4AB7D8)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          className="text-lh font-iranyekan font-black"
        >
          TaskBunny
        </h1>
        <img
          src={logo}
          alt="Logo"
          className="mr-4 p-1"
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "20%",
            border: "1px solid #AAAAAA",
          }}
        />
      </div>
      <div className="w-[274px] p-1">
        <Accordion
          id="workspaces"
          head={<Head id={"workspaces"} title={"ورک اسپیس‌ها"} />}
        >
          <button
            onClick={toggleModal}
            className="flex bg-[#D3D3D3] h-[32px] rounded-[3px] justify-center items-center mb-8 w-[274px]"
          >
            <h3 className="font-iranyekan font-normal text-[12px] ">
              {" "}
              ساختن ورک‌اسپیس جدید
            </h3>
          </button>

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
