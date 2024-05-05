import Workspace from "./workspace";
import useWorkspaces from "../../hooks/useWorkspaces";
import { useEffect } from "react";

const WorkspaceList: React.FC = () => {
  const { isLoading, workspaces, error, getWorkspaces } = useWorkspaces();
  useEffect(() => {
    getWorkspaces();
  }, []);

  return (
    <div className="flex flex-col" onClick={(e) => e.stopPropagation()}>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <ul>
          {workspaces &&
            workspaces.map((workspace) => (
              <Workspace
                key={workspace.id}
                workspaceId={workspace.id}
                workspaceColor={workspace.color}
                WorkspaceName={workspace.name}
              />
            ))}
        </ul>
      )}
    </div>
  );
};

export default WorkspaceList;
