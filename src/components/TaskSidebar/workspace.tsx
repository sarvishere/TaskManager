import { useEffect, useState } from "react";
import CreateProjectModal from "../Modal/createProjectmodal";
import Projects from "./projects";
import useProjects from "../../hooks/useProjects";

export interface WorkspaceProps {
  workspaceId: number;
  workspaceColor?: string;
  WorkspaceName: string;
}

const Workspace: React.FC<WorkspaceProps> = ({
  workspaceId,
  workspaceColor,
  WorkspaceName,
}: WorkspaceProps) => {
  const [selectedWorkspace, setSelectedWorkspace] = useState<{
    id: number;
  }>({ id: 0 });
  const [hoveredWorkspaceId, setHoveredWorkspaceId] = useState<number | null>(
    null
  );
  const handleWorkspaceHover = (id: number | null) => {
    setHoveredWorkspaceId(id);
  };
  const { projects, getProjects, addProject } = useProjects(workspaceId);
  useEffect(() => {
    getProjects();
  }, [workspaceId]);
  console.log("workspace.tsx");
  console.log(projects);

  const handleCloseModal = () => {
    setIsWorkspaceModal(false);
  };

  const handleButtonClick = (e: any) => {
    setIsWorkspaceModal(true);
    setSelectedWorkspace({ id: Number(e.target.value) });
  };

  const [isWorkspaceModal, setIsWorkspaceModal] = useState(false);

  return (
    <div>
      <li key={workspaceId} className="flex flex-col pt-2">
        <div
          className="flex justify-between "
          onMouseEnter={() => handleWorkspaceHover(workspaceId)}
          onMouseLeave={() => handleWorkspaceHover(null)}
        >
          <div className="flex gap-1">
            <span
              className="w-4 h-4 rounded "
              style={{ backgroundColor: workspaceColor }}
            />
            <p>{WorkspaceName}</p>
          </div>

          <div>
            {hoveredWorkspaceId === workspaceId && (
              <button
                onClick={(e) => handleButtonClick(e)}
                className=" text-black rounded"
                value={workspaceId}
              >
                {" "}
                ...{" "}
              </button>
            )}
          </div>
        </div>

        <div>
          <Projects workspaceId={workspaceId} projects={projects} />
        </div>
      </li>

      {isWorkspaceModal && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-lg">
            <CreateProjectModal
              onClose={handleCloseModal}
              workspaceId={workspaceId}
              onAddProject={addProject}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Workspace;
