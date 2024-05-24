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
  workspaceIdState: number;
  UpdateProjectIdState: (newState: number) => void;
  UpdateWorkspaceIdState: (newState: number) => void;
}

export const BoardContext = createContext<ContextValue>({
  projectNameState: "پروژه‌های من",
  updateProjectNameState: () => {},
  projectIdState: null,
  workspaceIdState: 0,
  UpdateProjectIdState: () => {},
  UpdateWorkspaceIdState: () => {},
});

const BoardPage: React.FC = () => {
  const [activeButton, setActiveButton] = useState("columnview");
  const [projectNameState, setProjectNameState] = useState<string>("");
  const [projectIdState, setProjectIdState] = useState<number | null>(null);
  const [workspaceIdState, setWorkspaceIdState] = useState<number>(0);
  const params = useParams();
  const navigate = useNavigate();
  const { workspaceId, projectId } = params as {
    workspaceId?: string;
    projectId?: string;
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
    if (workspaceId && projectId) {
      setWorkspaceIdState(Number(workspaceId));
      setProjectIdState(Number(projectId));
    }
  }, [workspaceId, projectId]);

  useEffect(() => {
    if (projectIdState !== null && workspaceIdState !== null) {
      navigate(`/${workspaceIdState}/${projectIdState}/${activeButton}`);
      // console.log(workspaceId, projectId);
    }
  }, [projectIdState, workspaceIdState, activeButton]);

  const updateProjectNameState = (newState: string) => {
    setProjectNameState(newState);
  };

  const UpdateProjectIdState = (newState: number) => {
    setProjectIdState(newState);
  };

  const UpdateWorkspaceIdState = (newState: number) => {
    setWorkspaceIdState(newState);
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
        workspaceIdState,
        UpdateProjectIdState,
        UpdateWorkspaceIdState,
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
          <TaskNav
            onButtonClick={handleButtonClick}
            activeButton={activeButton}
            projectName={projectNameState}
          />
          <div className="mr-[16px]">
            <div className="mr-[16px]">{renderActiveComponent()}</div>
          </div>
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
