import Projects from './projects';
import {  useState } from 'react';
import useWorkspaces from '../../hooks/useWorkspaces';

const WorkspacesList = () => {
 
  const { isLoading: workspaceLoading, workspaces, error: workspaceError } = useWorkspaces();
  const [selectedProject, setSelectedProject] = useState<string>("");



  const handleProjectSelect = (id: number, name: string) => {
    setSelectedProject(name);

  };

  return (
    <div className="flex flex-col ">
      <ul >
        {workspaces && workspaces.map(workspace => (
          <li key={workspace.id} className="flex flex-col pt-2">
            <div className="flex items-center">
              <span className="w-4 h-4 rounded ml-1 " 
              style={{ backgroundColor: workspace.color }}
               />
              <span>{workspace.name}</span>
            </div>
            <div >
              <Projects
                workspaceId={workspace.id}
                onProjectSelect={handleProjectSelect}
                setSelectedProject={setSelectedProject}
                
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkspacesList;






