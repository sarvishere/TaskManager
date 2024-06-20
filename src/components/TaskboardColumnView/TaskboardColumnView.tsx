import { useContext } from "react";
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

    // Find the task to move
    const sourceBoard = boards.find((board) => board.id === sourceBoardId);
    const taskToMove = sourceBoard?.tasks.find((task) => task.id === taskId);

    if (!taskToMove) {
      return;
    }

    try {
      // Add task to destination board
      const newTask = await addTask(
        Number(workspaceId),
        Number(projectId),
        destinationBoardId,
        {
          name: taskToMove.name,
          description: taskToMove.description,
        }
      );

      // Update local state
      const updatedBoards = boards.map((board) => {
        if (board.id === sourceBoardId) {
          // Remove task from source board
          const updatedTasks = board.tasks.filter((task) => task.id !== taskId);
          return {
            ...board,
            tasks: updatedTasks,
            tasks_count: updatedTasks.length,
          };
        } else if (board.id === destinationBoardId) {
          // Add task to destination board
          const updatedTasks = [...board.tasks, newTask];
          return {
            ...board,
            tasks: updatedTasks,
            tasks_count: updatedTasks.length,
          };
        }
        return board;
      });

      setBoards(updatedBoards);

      // Delete task from source board
      await deleteTask(
        Number(workspaceId),
        Number(projectId),
        sourceBoardId,
        taskId
      );
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
