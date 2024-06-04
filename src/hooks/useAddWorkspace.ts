import { useState } from "react";
import workspaceService, { IWorkspace } from "../services/WorkspaceService";
const useAddWorkspace = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const addWorkspace = (data: IWorkspace) => {
    setIsLoading(true);
    workspaceService().create(data)
      .catch((err: Error) => setError(err))
      .finally(() => setIsLoading(false));
  };

  return { error, isLoading, addWorkspace };
};

export default useAddWorkspace;
