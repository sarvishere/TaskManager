import Calendar from "../../components/calendar";
import React, { createContext, useEffect, useState } from "react";
import TaskNav from "../../components/TaskNav";
import TaskSidebar from "../../components/TaskSidebar";
import TaskboardListView from "../../components/TaskboardListView/TaskboardListView";
import TaskboardColumnView from "../../components/TaskboardColumnView/TaskboardColumnView";
import useWorkspaces from "../../hooks/useWorkspaces";
import { useNavigate, useParams } from "react-router-dom";
import useBoards from "../../hooks/useBoards";

interface ContextValue {
  projectNameState: string;
  updateProjectNameState: (newState: string) => void;
  projectIdState: number | null;
  workspaceIdState: number;
  UpdateProjectIdState: (newState: number) => void;
  UpdateWorkspaceIdState: (newState: number) => void;
}

export const BoardContext = createContext<ContextValue>({
  projectNameState: "",
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

  const { getBoards, boards } = useBoards();

  useEffect(() => {
    getWorkspaces();
  }, []);

  useEffect(() => {
    if (
      workspaceId &&
      projectId &&
      !isNaN(Number(workspaceId)) &&
      !isNaN(Number(projectId))
    )
      setWorkspaceIdState(Number(workspaceId));
    setProjectIdState(Number(projectId));
  }, [workspaceId, projectId, workspaces]);

  useEffect(() => {
    if (projectIdState !== null && workspaceIdState !== 0) {
      navigate(`/${workspaceIdState}/${projectIdState}/${activeButton}`);
    }
  }, [projectIdState, workspaceIdState, activeButton, navigate]);

  const updateProjectNameState = (newState: string) =>
    setProjectNameState(newState);
  const UpdateProjectIdState = (newState: number) =>
    setProjectIdState(newState);
  const UpdateWorkspaceIdState = (newState: number) =>
    setWorkspaceIdState(newState);

  const handleButtonClick = (buttonType: string) => setActiveButton(buttonType);

  const renderActiveComponent = () => {
    switch (activeButton) {
      case "listview":
        return (
          <TaskboardListView
            projectId={projectIdState as number}
            projectName={projectNameState}
            workspaceId={workspaceIdState}
            boards={boards}
            getBoards={getBoards}
          />
        );
      case "calendar":
        return <Calendar />;
      default:
        return <TaskboardColumnView />;
    }
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
};

export default BoardPage;
