import React, { useEffect, useState, useContext } from 'react';
import useProjects from '../../hooks/useProjects';
import { BoardContext } from '../../layout/Board';

interface ProjectProps {
  workspaceId: number;
  onProjectSelect: (id: number, name: string) => void;
  setSelectedProject: (name: string) => void;
}

const Projects: React.FC<ProjectProps> = ({ workspaceId, onProjectSelect, setSelectedProject }) => {
  const { projects, error, isLoading, getProjects } = useProjects();
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const { updateProjectNameState } = useContext(BoardContext);

  useEffect(() => {
    getProjects(workspaceId);
  }, [workspaceId]);

  const handleProjectSelect = (id: number, name: string) => {
    if (selectedProjectId === id) {
      return;
    }

    setSelectedProject(name);
    setSelectedProjectId(id);
    updateProjectNameState(name);
  };

  const handleButtonClick = (id: number, name: string) => {
    const prevSelectedButton = document.querySelector('.active');
    if (prevSelectedButton) {
      prevSelectedButton.classList.remove('active');
    }

    setSelectedProject(name);
    setSelectedProjectId(id);
    updateProjectNameState(name);

    const currentButton = document.getElementById(`project-${id}`);
    if (currentButton) {
      currentButton.classList.add('active');
    }
  };

  const handleInnerButtonClick = (id: number, name: string) => {

    console.log("Inner button clicked! Show modal for project:", id, name);
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {projects && (
        <ul className='project' >
          {projects.map((project) => (
            <li key={project.id} className={projects.length > 0 ? "mr-5 pt-2" : ""}>
              <div className="outer-button">
                <button
                  id={`project-${project.id}`}
                  onClick={() => handleButtonClick(project.id, project.name)}
                  className={selectedProjectId === project.id ? 'active' : ''}
                >
                  {project.name}
                </button>
                <div className="inner-button">
                  <button
                    onClick={() => handleInnerButtonClick(project.id, project.name)}
                  >
                    ...  
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Projects;




