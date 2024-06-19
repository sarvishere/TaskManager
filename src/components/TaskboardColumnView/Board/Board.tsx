import React, { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import useTasks from "../../../hooks/useTasks";
import { useParams } from "react-router-dom";
import Column from "./column";

interface BoardProps {
  handleDeleteBoard: (id: number) => void;
  handleUpdateBoard: (title: string, id: number) => void;
  bordId: number;
  boardColor: string;
  boardTask: number;
  boardName: string;
  boardTasks: any;
}

const Board: React.FC<BoardProps> = ({
  handleDeleteBoard,
  handleUpdateBoard,
  bordId,
  boardColor,
  boardTask,
  boardName,
  boardTasks,
}) => {
  const { getAllTasks, tasks, setTasks } = useTasks();
  const { workspaceId, projectId } = useParams();

  useEffect(() => {
    getAllTasks(Number(workspaceId), Number(projectId), bordId);
  }, [workspaceId, projectId, bordId]);

  return (
    <div>
      <Droppable droppableId={String(bordId)}>
        {(provided) => (
          <div
            className="flex mt-2 gap-2 flex-col"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <Column
              handleDeleteBoard={handleDeleteBoard}
              handleUpdateBoard={handleUpdateBoard}
              bordId={bordId}
              boardColor={boardColor}
              boardTask={boardTask}
              boardName={boardName}
              boardTasks={boardTasks}
              tasks={tasks}
              setTasks={setTasks}
            />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Board;
