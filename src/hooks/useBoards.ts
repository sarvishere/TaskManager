import { useState, useCallback } from "react";
import boardService, { BoardResponse } from "../services/board-service";

const useBoards = () => {
  const [boards, setBoards] = useState<BoardResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const getBoards = useCallback((workspaceId: number, projectId: number) => {
    setIsLoading(true);
    boardService(workspaceId, projectId)
      .getAll()
      .then((res) => setBoards(res.data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    boards,
    isLoading,
    error,
    getBoards,
  };
};

export default useBoards;


