import React, { useEffect, useState, useContext } from 'react';
import useProjects from '../../hooks/useProjects';
import { BoardContext } from '../../layout/Board';
import CreateTaskModal from '../Modal/createTaskmodal';
import styles from './styles.module.css';

interface ProjectProps {
  workspaceId: number;
  onProjectSelect: (id: number, name: string) => void;
  setSelectedProject: (name: string) => void;
}

const Projects: React.FC<ProjectProps> = ({ workspaceId, onProjectSelect, setSelectedProject }) => {
  const { projects, error, isLoading, getProjects } = useProjects();
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const { updateProjectNameState } = useContext(BoardContext);
const [selectedProjectForTask, setSelectedProjectForTask] = useState<{ id: number; name: string } | null>(
null
);
const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);

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
setSelectedProjectForTask({ id, name });
setIsCreateTaskModalOpen(true);
    console.log("Inner button clicked! Show modal for project:", id, name);
  };

  const handleCloseModal = () => {
setIsCreateTaskModalOpen(false);
setSelectedProjectForTask(null);
};

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {projects && (
        <ul>
  {projects.map((project) => (
    <li key={project.id} className={projects.length > 0 ? "mr-5 pt-2" : ""}>
      <div className=" group flex justify-between">
        <button
          id={`project-${project.id}`}
          onClick={() => handleButtonClick(project.id, project.name)}
          className={`px-4 py-2 transition-colors duration-300 ease-in-out ${
            selectedProjectId === project.id ? 'active' : ''
          }`}
        >
          {project.name}
        </button>
          <button
            onClick={() => handleInnerButtonClick(project.id, project.name)}
            //when became hover show this 
            // show CreateTaskModal when click on this component
          >
            ...
          </button>
      </div>
    </li>
  ))}
</ul>
      )}

{isCreateTaskModalOpen && selectedProjectForTask && (
<div className={styles["modal"]}>
<CreateTaskModal
projectId={selectedProjectForTask.id}
projectName={selectedProjectForTask.name}
onClose={handleCloseModal}
/>
</div>
)}

    </div>
  );
};

export default Projects;
