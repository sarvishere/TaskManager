import useWorkspaces from '../../hooks/useWorkspaces';
import Projects from './projects';


const WorkspacesList = () => {
    const { isLoading: workspaceLoading, workspaces, error: workspaceError } = useWorkspaces();
  return (
    <div className='flex flex-col'>
  <ul>
{workspaces && workspaces.map(workspace => (
          <li key={workspace.id} className="flex items-center">
          <span className="w-4 h-4 mr-2 rounded ml-2" style={{ backgroundColor: workspace.color }} /> 
          <span>{workspace.name}</span>
        <Projects workspaceId={workspace.id}/>
        </li>
        
)
  )
}
  </ul>
</div>
  )
}

export default WorkspacesList;