import React, { createContext, useEffect, useState } from "react";
import TaskNav from "../../components/TaskNav";
import Calendar from "../../components/calendar";
import TaskSidebar from "../../components/TaskSidebar";
import TaskboardListView from "../../components/TaskboardListView/TaskboardListView";
import TaskboardColumnView from "../../components/TaskboardColumnView/TaskboardColumnView";
import useWorkspaces from "../../hooks/useWorkspaces";
import { useNavigate, useParams } from "react-router-dom";

interface ContextValue {
  projectNameState: string;
  updateProjectNameState: (newState: string) => void;
  projectIdState: number | null;
  UpdateProjectIdState: (newState: number) => void;
}

export const BoardContext = createContext<ContextValue>({
  projectNameState: "پروژه‌های من",
  updateProjectNameState: () => {},
  projectIdState: null,
  UpdateProjectIdState: () => {},
});

const BoardPage: React.FC = () => {
  const [activeButton, setActiveButton] = useState("columnview");
  const [projectNameState, setProjectNameState] = useState<string>("");
  const [projectIdState, SetProjectIdState] = useState<number | null>(null);
  const params = useParams();
  const navigate = useNavigate();
  const projectId = params.projectId;
  const {
    deleteWorkspace,
    getWorkspaces,
    workspaces,
    updateWorkspaceName,
    AddWorkspace,
  } = useWorkspaces();
  useEffect(() => {
    getWorkspaces();
    navigate(`/project/${projectIdState}`);
  }, [projectIdState]);

  const updateProjectNameState = (newState: string) => {
    setProjectNameState(newState);
    console.log(projectNameState);
  };

  const UpdateProjectIdState = (newState: number) => {
    SetProjectIdState(newState);
  };

  const handleButtonClick = (buttonType: string) => {
    setActiveButton(buttonType);
  };

  return (
    <BoardContext.Provider
      value={{
        projectNameState,
        updateProjectNameState,
        projectIdState,
        UpdateProjectIdState,
      }}
    >
      <div className="flex">
        <TaskSidebar
          workspaces={workspaces}
          deleteWorkspace={deleteWorkspace}
          updateWorkspaceName={updateWorkspaceName}
          AddWorkspace={AddWorkspace}
          getWorkspaces={getWorkspaces}
        />
        <div>
          <h1> hey {projectId}</h1>
          <h1> </h1>
          <TaskNav
            onButtonClick={handleButtonClick}
            activeButton={activeButton}
            projectName={projectNameState}
          />
          <div className="mr-[16px]">{renderActiveComponent()}</div>
        </div>
      </div>
    </BoardContext.Provider>
  );

  function renderActiveComponent() {
    switch (activeButton) {
      case "listview":
        return <TaskboardListView />;
      case "calendar":
        return <Calendar />;
      default:
        return <TaskboardColumnView />;
    }
  }
};

export default BoardPage;
