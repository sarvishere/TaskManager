import React, { useEffect, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import useTasks from "../../../hooks/useTasks";
import { useParams } from "react-router-dom";
import Column from "./column";
import Header from "./Header";

interface BoardProps {
  handleDeleteBoard: (id: number) => void;
  handleUpdateBoard: (title: string, id: number) => void;
  boardId: number;
  boardColor: string;
  boardTask: number;
  boardName: string;
  boardTasks: any;
  newTask: any;
  deletedTasks: any;
}

const Board: React.FC<BoardProps> = ({
  handleDeleteBoard,
  handleUpdateBoard,
  boardId,
  boardColor,
  boardTask,
  boardName,
  boardTasks,
  newTask,
  deletedTasks,
}) => {
  const { getAllTasks, setIsLoading, isLoading, tasks, setTasks } = useTasks();
  const { workspaceId, projectId } = useParams();

  useEffect(() => {
    const fetchTasks = async () => {
      getAllTasks(Number(workspaceId), Number(projectId), boardId);
      setIsLoading(false);
    };
    fetchTasks();
    setTasks(tasks);
  }, [workspaceId, projectId, boardId, newTask]);

  if (isLoading) {
    return <div> Loading tasks... </div>;
  }

  return (
    <div>
      <div className="mb-2">
        <Header
          handleDeleteBoard={handleDeleteBoard}
          handleUpdateBoard={handleUpdateBoard}
          boardId={boardId}
          boardColor={boardColor}
          boardTask={boardTask}
          boardName={boardName}
          setTasks={setTasks}
          boardTasks={boardTasks}
        />
      </div>
      <Droppable droppableId={String(boardId)}>
        {(provided) => (
          <div
            className="flex mt-2 gap-2 flex-col"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <Column
              handleDeleteBoard={handleDeleteBoard}
              handleUpdateBoard={handleUpdateBoard}
              boardId={boardId}
              boardColor={boardColor}
              boardTask={boardTask}
              boardName={boardName}
              boardTasks={boardTasks}
              tasks={tasks}
              setTasks={setTasks}
              deletedTasks={deletedTasks}
            />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Board;
