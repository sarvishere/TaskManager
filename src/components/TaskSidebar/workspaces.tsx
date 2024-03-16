import React, { useState } from 'react';
import Projects from './projects';
import useWorkspaces from '../../hooks/useWorkspaces';
import CreateTaskModal from '../Modal/createTaskmodal';

const WorkspacesList = () => {
  const { isLoading: workspaceLoading, workspaces, error: workspaceError } = useWorkspaces();
  const [selectedProject, setSelectedProject] = useState<string>("");
  const [hoveredWorkspaceId, setHoveredWorkspaceId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectSelect = (id: number, name: string) => {
    setSelectedProject(name);
  };

  const handleWorkspaceHover = (id: number) => {
    setHoveredWorkspaceId(id);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col ">
      <ul >
        {workspaces && workspaces.map(workspace => (
          <li key={workspace.id} className="flex flex-col pt-2" onMouseEnter={() => handleWorkspaceHover(workspace.id)} onMouseLeave={() => handleWorkspaceHover(null)}>
            <div className="flex justify-between ">
              <div className='flex gap-1'> 
              <span className="w-4 h-4 rounded " style={{ backgroundColor: workspace.color }} />
              <p>{workspace.name}</p>    
              </div>

              <div> 
                {hoveredWorkspaceId === workspace.id && (
                  <button onClick={handleButtonClick} className=" text-black rounded"> ... </button>
                )}
                </div>
            </div>

            <div>
              <Projects
                workspaceId={workspace.id}
                onProjectSelect={handleProjectSelect}
                setSelectedProject={setSelectedProject}
              />
            </div>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-lg">
            <CreateTaskModal onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkspacesList;
