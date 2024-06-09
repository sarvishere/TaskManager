import { useState, useCallback } from "react";
import boardService, { BoardResponse } from "../services/board-service";

const useBoards = () => {
  const [boards, setBoards] = useState<BoardResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const getBoards = useCallback((workspaceId: number, projectId: number) => {
    setIsLoading(true);
    return boardService(workspaceId, projectId)
      .getAll()
      .then((res) => {
        setBoards(res.data);
        return res.data; 
      })
      .catch((error) => {
        setError(error);
        throw error; 
      })
      .finally(() => setIsLoading(false));
  }, []);

  return {
    boards,
    isLoading,
    error,
    setBoards,
    getBoards,
  };
};

export default useBoards;
