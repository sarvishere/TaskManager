import { useState } from "react";
import boardService, {
  AddBoardData,
  BoardResponse,
} from "../services/board-service";

const useAddBoard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [addedBoard, setAddedBoard] = useState<BoardResponse>();
  const [addError, setAddError] = useState<Error>();

  const addBoard = async (
    workspaceId: number,
    projectId: number,
    data: AddBoardData
  ) => {
    setIsLoading(true);
    boardService<AddBoardData, BoardResponse>(workspaceId, projectId)
      .create(data)
      .then((res) => setAddedBoard(res.data))
      .catch((error) => setAddError(error))
      .finally(() => setIsLoading(false));
  };

  return { addBoard, addedBoard, isLoading, addError };
};

export default useAddBoard;
