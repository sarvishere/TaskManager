import Calendar from "../../components/calendar";
import React, { createContext, useEffect, useState, useCallback } from "react";
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
  InitializePage: () => void;
}

export const BoardContext = createContext<ContextValue>({
  projectNameState: "",
  updateProjectNameState: () => {},
  projectIdState: null,
  workspaceIdState: 0,
  UpdateProjectIdState: () => {},
  UpdateWorkspaceIdState: () => {},
  InitializePage: () => {},
});

const BoardPage: React.FC = () => {
  const [activeButton, setActiveButton] = useState("columnview");
  const [projectNameState, setProjectNameState] = useState<string>("");
  const [projectIdState, setProjectIdState] = useState<number | null>(null);
  const [workspaceIdState, setWorkspaceIdState] = useState<number | null>(null);
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

  const getLastWorkspaceId = () => {
    if (workspaces.length > 0) {
      return workspaces[workspaces.length - 1].id;
    } else {
      return null;
    }
  };

  const getLastProject = (workspaceId: number) => {
    const workspace = workspaces.find((ws) => ws.id === workspaceId);
    if (workspace && workspace.projects.length > 0) {
      return workspace.projects[workspace.projects.length - 1];
    } else {
      return null;
    }
  };

  const initializePage = useCallback(async () => {
    await getWorkspaces();

    let workspaceIdNum = Number(workspaceId);
    let projectIdNum = Number(projectId);

    if (isNaN(workspaceIdNum) || isNaN(projectIdNum)) {
      workspaceIdNum = getLastWorkspaceId();
      const lastProject = getLastProject(workspaceIdNum);
      if (lastProject) {
        projectIdNum = lastProject.id;
        setProjectNameState(lastProject.name);
      } else {
        projectIdNum = 0;
        setProjectNameState("");
      }
    } else {
      const workspace = workspaces.find((ws) => ws.id === workspaceIdNum);
      const project = workspace?.projects.find((p) => p.id === projectIdNum);
      if (project) {
        setProjectNameState(project.name);
      }
    }

    setWorkspaceIdState(workspaceIdNum);
    setProjectIdState(projectIdNum);
  }, [workspaceId, projectId, getWorkspaces, workspaces]);

  useEffect(() => {
    initializePage();
  }, []);

  useEffect(() => {
    if (projectIdState !== null && workspaceIdState !== null) {
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
            workspaceId={workspaceIdState as number}
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
        workspaceIdState: workspaceIdState as number,
        UpdateProjectIdState,
        UpdateWorkspaceIdState,
        InitializePage: initializePage,
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
