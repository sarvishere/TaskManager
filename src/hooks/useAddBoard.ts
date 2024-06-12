import { useState } from "react";
import boardService, { AddBoardData, BoardResponse } from "../services/board-service";

const useAddBoard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [addedBoard, setAddedBoard] = useState<BoardResponse>();
  const [addError, setAddError] = useState<Error>();

  const addBoard = (workspaceId: number, projectId: number, data: AddBoardData, callback?: (newBoard: BoardResponse) => void) => {
    setIsLoading(true);
    boardService<AddBoardData, BoardResponse>(workspaceId, projectId)
      .create(data)
      .then((res) => {
        const newBoard: BoardResponse = res.data;
        setAddedBoard(newBoard);
        if (callback) {
          callback(newBoard); 
        }
      })
      .catch((error) => {
        setAddError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { addBoard, addedBoard, isLoading, addError };
};

export default useAddBoard;
