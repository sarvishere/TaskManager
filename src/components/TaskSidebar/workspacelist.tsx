import Workspace from "./workspace";
import useWorkspaces from "../../hooks/useWorkspaces";
import { IWorkspaces } from "../../services/workspaces-service";

interface WorkspaceListProps {
  workspaces: IWorkspaces[];
  deleteWorkspace: any;
  updateWorkspaceName: any;
}

const WorkspaceList = ({
  updateWorkspaceName,
  workspaces,
  deleteWorkspace,
}: WorkspaceListProps) => {
  const { isLoading, error } = useWorkspaces();

  return (
    <div className="flex flex-col" onClick={(e) => e.stopPropagation()}>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <ul>
          {/* {workspaces &&
            workspaces.map((workspace) => (
              <Workspace
                key={workspace.id}
                workspaceId={workspace.id}
                workspaceColor={workspace.color}
                WorkspaceName={workspace.name}
                deleteWorkspace={deleteWorkspace}
                updateWorkspaceName={updateWorkspaceName}
              />
            )) } */}
          {workspaces.length === 0 ? (
            <h1>شما ورک اسپیس ندارید</h1>
          ) : (
            workspaces.map((workspace) => (
              <Workspace
                key={workspace.id}
                workspaceId={workspace.id}
                workspaceColor={workspace.color}
                WorkspaceName={workspace.name}
                deleteWorkspace={deleteWorkspace}
                updateWorkspaceName={updateWorkspaceName}
              />
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default WorkspaceList;
