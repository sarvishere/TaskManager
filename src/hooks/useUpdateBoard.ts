import { useState } from "react";
import boardService, {
  BoardResponse,
  UpdateBoardData,
} from "../services/board-service";

const useUpdateBoard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [updatedBoard, setUpdatedBoard] = useState<BoardResponse>();
  const [error, setError] = useState<Error>();

  const updateBoard = async (
    workspaceId: number,
    projectId: number,
    id: number,
    data: UpdateBoardData
  ) => {
    setIsLoading(true);
    boardService<UpdateBoardData, BoardResponse>(workspaceId, projectId)
      .patch(data, undefined, id)
      .then((res) => setUpdatedBoard(res.data))
      .catch((error) => {
        setError(error);
      })
      .finally(() => setIsLoading(false));
  };

  return { updateBoard, updatedBoard, isLoading, error };
};

export default useUpdateBoard;
