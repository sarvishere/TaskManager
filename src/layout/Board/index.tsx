import React, { createContext, useEffect, useState } from "react";
import TaskNav from "../../components/TaskNav";
import Calendar from "../../components/calendar";
import TaskSidebar from "../../components/TaskSidebar";
import TaskboardListView from "../../components/TaskboardListView/TaskboardListView";
import TaskboardColumnView from "../../components/TaskboardColumnView/TaskboardColumnView";
import useWorkspaces from "../../hooks/useWorkspaces";

interface ContextValue {
  projectNameState: string;
  updateProjectNameState: (newState: string) => void;
}

export const BoardContext = createContext<ContextValue>({
  projectNameState: "پروژه‌های من",
  updateProjectNameState: () => {},
});

const BoardPage: React.FC = () => {
  const [activeButton, setActiveButton] = useState("columnview");
  const [projectNameState, setProjectNameState] = useState<string>("");

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

  const updateProjectNameState = (newState: string) => {
    setProjectNameState(newState);
  };

  const handleButtonClick = (buttonType: string) => {
    setActiveButton(buttonType);
  };

  return (
    <BoardContext.Provider value={{ projectNameState, updateProjectNameState }}>
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
