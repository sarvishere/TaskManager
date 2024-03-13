import { useState } from "react"
import addWorkspaceService, { IWorkspace } from "../services/addWorkspaceService";

const useAddWorkspace=()=>{

    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState<Error>();

    const addWorkspace=(data:IWorkspace)=>{
     setIsLoading(true);
     addWorkspaceService().create(data).catch((err:Error)=>setError(err)).finally(()=>setIsLoading(false));
    }
    return {error,isLoading,addWorkspace}
}

export default useAddWorkspace;