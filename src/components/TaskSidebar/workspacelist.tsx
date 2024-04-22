import Workspace from "./workspace";
import useWorkspaces from "../../hooks/useWorkspaces";

const WorkspaceList: React.FC = () => {
  const { isLoading, workspaces, error } = useWorkspaces();

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
