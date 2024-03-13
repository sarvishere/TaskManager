import { useEffect, useState } from "react";
import boardService, { BoardResponse } from "../services/board-service";

const useBoards = () => {
  const [boards, setBoards] = useState<BoardResponse[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const getBoards = (workspaceId: number, projectId: number) => {
    useEffect(() => {
      setIsLoading(true);
      boardService(workspaceId, projectId)
        .getAll()
        .then((res) => setBoards(res.data))
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false));
    }, [workspaceId, projectId]);
  };

  return { boards, isLoading, error, getBoards };
};

export default useBoards;
