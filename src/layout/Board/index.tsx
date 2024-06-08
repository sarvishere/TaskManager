import Calendar from "../../components/calendar";
import React, { createContext, useEffect, useState } from "react";
import TaskNav from "../../components/TaskNav";
import TaskSidebar from "../../components/TaskSidebar";
import TaskboardListView from "../../components/TaskboardListView/TaskboardListView";
import TaskboardColumnView from "../../components/TaskboardColumnView/TaskboardColumnView";
import useWorkspaces from "../../hooks/useWorkspaces";
import { useNavigate, useParams } from "react-router-dom";
import useProjects from "../../hooks/useProjects";
import useAddWorkspace from "../../hooks/useAddWorkspace";

interface ContextValue {
  projectNameState: string;
  updateProjectNameState: (newState: string) => void;
  projectIdState: number | null;
  workspaceIdState: number | null;
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
  const {
    deleteWorkspace,
    getWorkspaces,
    workspaces,
    setWorkspaces,
    updateWorkspaceName,
  } = useWorkspaces();

  const [activeButton, setActiveButton] = useState("columnview");
  const [projectNameState, setProjectNameState] = useState<string>("");
  const [projectIdState, setProjectIdState] = useState<number>(0);
  const [workspaceIdState, setWorkspaceIdState] = useState<number>(0);

  const params = useParams();
  const navigate = useNavigate();
  const { workspaceId, projectId } = params as {
    workspaceId?: string;
    projectId?: string;
  };

  const { addWorkspace } = useAddWorkspace();
  const { getProjects } = useProjects(workspaceIdState);

  useEffect(() => {
    getWorkspaces();
  }, []);

  useEffect(() => {
    if (workspaces) {
      const initWorkspaceId = workspaces[workspaces.length - 1].id;
      setWorkspaceIdState(initWorkspaceId);
    }
    if (workspaceIdState) {
      getProjects().then((projects) => {
        if (projects && projects.length > 0) {
          const initProject = projects[projects.length - 1];
          setProjectIdState(Number(initProject.id));
          setProjectNameState(initProject.name);
        }
      });
    }
  }, [workspaces]);

  useEffect(() => {
    if (
      workspaceId &&
      projectId &&
      !isNaN(Number(workspaceId)) &&
      !isNaN(Number(projectId))
    ) {
      setWorkspaceIdState(Number(workspaceId));
      setProjectIdState(Number(projectId));
    }
  }, [workspaceId, projectId]);

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
          />
        );
      case "calendar":
        return (
          <Calendar
            projectId={projectIdState as number}
            workspaceId={workspaceIdState}
          />
        );
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
          AddWorkspace={addWorkspace}
          setWorkspaces={setWorkspaces}
        />
        <div>
          <TaskNav
            onButtonClick={handleButtonClick}
            activeButton={activeButton}
            projectName={projectNameState}
          />
          <div className="mr-[16px]">
            <div>{renderActiveComponent()}</div>
          </div>
        </div>
      </div>
    </BoardContext.Provider>
  );
};

export default BoardPage;
