import { useContext, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import useAddTask from "../../hooks/useAddTask";
import useDeleteTask from "../../hooks/useDeleteTask";
import { BoardResponse } from "../../services/board-service";
import Flex from "../ui/Flex";
import Seperator from "../ui/Seperator";
import Board from "./Board/Board";
import { useParams } from "react-router-dom";
import { BoardContext } from "../../layout/Board";
import NewBoard from "./TaskCountBadge/NewBoard";

export interface TaskboardColumnViewProps {
  boards: BoardResponse[];
  setBoards: any;
}

const TaskboardColumnView = ({
  boards,
  setBoards,
}: TaskboardColumnViewProps) => {
  const { handleAddBoard, handleDeleteBoard, handleUpdateBoard } =
    useContext(BoardContext);
  const { workspaceId, projectId } = useParams();
  const { addTask } = useAddTask();
  const { deleteTask } = useDeleteTask();
  const [newTask, setNewTask] = useState<any>(null);
  const [deletedTasks, setDeletedTasks] = useState<number[]>([]);

  const handleDragEnd = async (result: DropResult) => {
    const { source, destination, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const sourceBoardId = parseInt(source.droppableId);
    const destinationBoardId = parseInt(destination.droppableId);
    const taskId = parseInt(draggableId);

    const sourceBoard = boards.find((board) => board.id === sourceBoardId);
    const taskToMove = sourceBoard?.tasks.find((task) => task.id === taskId);

    if (!taskToMove) {
      return;
    }

    try {
      const newTask = await addTask(
        Number(workspaceId),
        Number(projectId),
        destinationBoardId,
        {
          name: taskToMove.name,
          description: taskToMove.description,
        }
      );

      setNewTask(newTask);

      deleteTask(Number(workspaceId), Number(projectId), sourceBoardId, taskId);

      setDeletedTasks([...deletedTasks, taskId]);
      const updatedBoards = boards.map((board) => {
        if (board.id === sourceBoardId) {
          return {
            ...board,
            tasks_count: board.tasks_count - 1,
          };
        } else if (board.id === destinationBoardId) {
          return {
            ...board,
            tasks_count: board.tasks_count + 1,
          };
        }
        return board;
      });
      setBoards(updatedBoards);
    } catch (error) {
      console.error("Failed to move task", error);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="h-full py-5">
        <Seperator orientation="vertically" />
        <Flex className="h-full" gap="S">
          {boards.map((board) => (
            <Board
              key={board.id}
              boardId={board.id}
              boardColor={board.color}
              boardTask={board.tasks_count}
              boardName={board.name}
              handleUpdateBoard={handleUpdateBoard}
              handleDeleteBoard={handleDeleteBoard}
              boardTasks={board.tasks}
              newTask={newTask}
              deletedTasks={deletedTasks}
            />
          ))}
          <NewBoard
            workspaceId={Number(workspaceId)}
            projectId={Number(projectId)}
            handleAddBoard={handleAddBoard}
          />
        </Flex>
      </div>
    </DragDropContext>
  );
};

export default TaskboardColumnView;
