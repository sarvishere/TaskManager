
import {useEffect, useState} from 'react'
import workspacesService, { IWorkspaces } from '../services/workspaces-service';

const useWorkspaces = () => {
const [workspaces , setWorkspaces] = useState<IWorkspaces[]>();
const [error , setError] = useState<Error>();
const [isLoading , setIsLoading] = useState(false);


    useEffect(() => {
setIsLoading(true);
workspacesService()
.getAll()
.then((res) => setWorkspaces(res.data))
.catch((error) => setError(error))
.finally(() => setIsLoading(false))
    } , [])

    return{isLoading , workspaces , error }
}

export default useWorkspaces