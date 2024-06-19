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
import useBoards from "../../hooks/useBoards";
import { BoardResponse } from "../../services/board-service";

interface ContextValue {
  projectNameState: string;
  updateProjectNameState: (newState: string) => void;
  projectIdState: number | null;
  workspaceIdState: number | null;
  UpdateProjectIdState: (newState: number) => void;
  UpdateWorkspaceIdState: (newState: number) => void;
  handleAddBoard: (newBoard: BoardResponse) => void;
  handleDeleteBoard: (boardId: number) => void;
  handleUpdateBoard: (title: string, boardId: number) => void;
}

export const BoardContext = createContext<ContextValue>({
  projectNameState: "",
  updateProjectNameState: () => {},
  projectIdState: null,
  workspaceIdState: 0,
  UpdateProjectIdState: () => {},
  UpdateWorkspaceIdState: () => {},
  handleAddBoard: () => {},
  handleDeleteBoard: () => {},
  handleUpdateBoard: () => {},
});

const BoardPage: React.FC = () => {
  const {
    deleteWorkspace,
    getWorkspaces,
    workspaces,
    setWorkspaces,
    updateWorkspaceName,
    addAndGetWorkspaces,
  } = useWorkspaces();

  const [activeButton, setActiveButton] = useState("columnview");
  const [projectNameState, setProjectNameState] = useState<string>("");
  const [projectIdState, setProjectIdState] = useState<number>(0);
  const [workspaceIdState, setWorkspaceIdState] = useState<number>(0);
  const [boards, setBoards] = useState<BoardResponse[]>([]);
  // const { boards, setBoards } = useBoards();

  const params = useParams();
  const navigate = useNavigate();
  const { workspaceId, projectId } = params as {
    workspaceId?: string;
    projectId?: string;
  };

  const { addWorkspace } = useAddWorkspace();
  const { getProjects } = useProjects(workspaceIdState);
  const { getBoards } = useBoards();

  useEffect(() => {
    getWorkspaces();
  }, []);

  useEffect(() => {
    if (workspaces) {
      let initWorkspaceId = 0;
      if (workspaces.length === 0) {
        initWorkspaceId = 0;
      } else {
        initWorkspaceId = workspaces[workspaces.length - 1].id;
      }
      setWorkspaceIdState(initWorkspaceId);
    }
    if (workspaceIdState !== 0) {
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
    if (workspaceId && projectId) {
      getBoards(workspaceIdState, projectIdState).then((boards) =>
        setBoards(boards)
      );
    }
  }, [workspaceIdState, projectIdState]);

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
    if (
      projectIdState !== null &&
      workspaceIdState !== 0 &&
      projectIdState !== 0
    ) {
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
  const handleAddBoard = (newBoard: BoardResponse) => {
    setBoards((prevBoards) => [...prevBoards, newBoard]);
  };

  const handleDeleteBoard = (boardId: number) => {
    setBoards((prevBoards) => {
      const updatedBoards = prevBoards.filter((b) => b.id !== boardId);
      return updatedBoards;
    });
  };

  const handleUpdateBoard = (title: string, boardId: number) => {
    if (title) {
      setBoards((prevBoards) =>
        prevBoards.map((b) => (b.id === boardId ? { ...b, name: title } : b))
      );
    }
  };

  const renderActiveComponent = () => {
    switch (activeButton) {
      case "listview":
        return <TaskboardListView boards={boards} />;
      case "calendar":
        return <Calendar />;
      default:
        return <TaskboardColumnView boards={boards} setBoards={setBoards} />;
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
        handleAddBoard,
        handleDeleteBoard,
        handleUpdateBoard,
      }}
    >
      <div className="flex">
        <TaskSidebar
          workspaces={workspaces}
          deleteWorkspace={deleteWorkspace}
          updateWorkspaceName={updateWorkspaceName}
          AddWorkspace={addWorkspace}
          getWorkspaces={getWorkspaces}
          setWorkspaces={setWorkspaces}
          addAndGetWorkspaces={addAndGetWorkspaces}
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
