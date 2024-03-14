import { useEffect } from 'react';
import useProjects  from '../../hooks/useProjects';

const ProjectComponent: React.FC<{ workspaceId: number }> = ({ workspaceId }) => {
    const { projects, error, isLoading, getProjects } = useProjects();
  
    useEffect(() => {
      getProjects(workspaceId);
    }, [workspaceId]);
    return (
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {projects && (
          <ul>
            {projects.map((project) => (
              <li key={project.id}>{project.name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default ProjectComponent;