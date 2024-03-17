import { useState } from "react";
import boardService from "../services/board-service";

const useDeleteBoard = () => {
  const [error, setError] = useState<Error>();

  const deleteBoard = async (
    workspaceId: number,
    projectId: number,
    boardId: number
  ) => {
    boardService(workspaceId, projectId)
      .delete(boardId)
      .catch((error) => setError(error));
  };

  return { deleteBoard, error };
};

export default useDeleteBoard;
