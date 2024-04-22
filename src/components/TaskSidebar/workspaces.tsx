import { useState } from "react";
import Projects from "./projects";
import useWorkspaces from "../../hooks/useWorkspaces";
import CreateProjectModal from "../Modal/createProjectmodal";
import useProjects from "../../hooks/useProjects";

export interface WorkspacesProps {
  workspaceId: number;
  data: string;
}

// here
const WorkspacesList: React.FC<WorkspacesProps> = ({
  workspaceId,
}: WorkspacesProps) => {
  const { workspaces } = useWorkspaces();
  const { addProject } = useProjects(workspaceId);
  // let workspaceToProjects: any = {
  //   workspace: undefined,
  //   projects: undefined,
  // };
  // workspaces?.forEach((workspace) => {
  //   const { projects } = useProjects(workspace.id);
  //   workspaceToProjects[workspace.id] = projects;
  // });

  // {
  //   "315": [{project1}, {project2}],
  //   "317":
  // }

  const [hoveredWorkspaceId, setHoveredWorkspaceId] = useState<number | null>(
    null
  );
  const [isWorkspaceModal, setIsWorkspaceModal] = useState(false);
  const [selectedWorkspace, setSelectedWorkspace] = useState<{
    id: number;
  }>({ id: 0 });

  const handleWorkspaceHover = (id: number | null) => {
    setHoveredWorkspaceId(id);
  };

  const handleButtonClick = (e: any) => {
    setIsWorkspaceModal(true);
    setSelectedWorkspace({ id: Number(e.target.value) });
  };

  const handleCloseModal = () => {
    setIsWorkspaceModal(false);
  };

  return (
    <div className="flex flex-col" onClick={(e) => e.stopPropagation()}>
      <ul>
        {workspaces &&
          workspaces.map((workspace) => (
            <li key={workspace.id} className="flex flex-col pt-2">
              <div
                className="flex justify-between "
                onMouseEnter={() => handleWorkspaceHover(workspace.id)}
                onMouseLeave={() => handleWorkspaceHover(null)}
              >
                <div className="flex gap-1">
                  <span
                    className="w-4 h-4 rounded "
                    style={{ backgroundColor: workspace.color }}
                  />
                  <p>{workspace.name}</p>
                </div>

                <div>
                  {hoveredWorkspaceId === workspace.id && (
                    <button
                      onClick={(e) => handleButtonClick(e)}
                      className=" text-black rounded"
                      value={workspace.id}
                    >
                      {" "}
                      ...{" "}
                    </button>
                  )}
                </div>
              </div>

              <div>
                <Projects
                  workspaceId={workspace.id}
                  newProjectName={""}
                  projectId={0}
                  // projects={workspaceToProjects[workspace.id]}
                />
              </div>
            </li>
          ))}
      </ul>

      {isWorkspaceModal && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-lg">
            <CreateProjectModal
              onClose={handleCloseModal}
              workspaceId={selectedWorkspace.id}
              onAddProject={addProject}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkspacesList;
