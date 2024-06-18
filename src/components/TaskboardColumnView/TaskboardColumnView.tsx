import { useContext, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import useAddTask from "../../hooks/useAddTask";
import useDeleteTask from "../../hooks/useDeleteTask";
import { BoardResponse } from "../../services/board-service";
import { Task } from "../../services/task-service";
import Button from "../ui/Button";
import Flex from "../ui/Flex";
import Icon from "../ui/Icon";
import Seperator from "../ui/Seperator";
import Board from "./Board/Board";
import NewTask from "../NewTask/NewTask";
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
  const [taskModal, setTaskModal] = useState(false);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const { source, destination, draggableId } = result;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const sourceBoardId = parseInt(source.droppableId);
    const destinationBoardId = parseInt(destination.droppableId);

    const updatedBoards = boards.map((board) => {
      if (board.id === sourceBoardId) {
        if (sourceBoardId === destinationBoardId) {
          const updatedTasks = reorder(
            board.tasks,
            source.index,
            destination.index
          );
          return {
            ...board,
            tasks: updatedTasks,
            tasks_count: updatedTasks.length,
          };
        } else {
          const updatedTasks = board.tasks.filter(
            (task) => task.id !== parseInt(draggableId)
          );
          return {
            ...board,
            tasks: updatedTasks,
            tasks_count: updatedTasks.length,
          };
        }
      } else if (board.id === destinationBoardId) {
        const draggableItem = boards
          .find((b) => b.id === sourceBoardId)
          ?.tasks.find((task) => task.id === parseInt(draggableId));
        if (draggableItem) {
          // Insert the draggable item into the destination board at the specified index
          const updatedTasks = [...board.tasks];
          updatedTasks.splice(destination.index, 0, draggableItem);
          return {
            ...board,
            tasks: updatedTasks,
            tasks_count: updatedTasks.length,
          };
        }
      }
      return board;
    });

    setBoards(updatedBoards);

    const movedTask = boards
      .find((board) => board.id === sourceBoardId)
      ?.tasks.find((task) => task.id === parseInt(draggableId));

    if (movedTask) {
      if (sourceBoardId !== destinationBoardId) {
        addTask(Number(workspaceId), Number(projectId), destinationBoardId, {
          ...movedTask,
          thumbnail: "",
          attachment: "",
        });
        deleteTask(
          Number(workspaceId),
          Number(projectId),
          sourceBoardId,
          movedTask.id
        );
      }
    }
  };

  const reorder = (
    list: Task[],
    startIndex: number,
    endIndex: number
  ): Task[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const newTaskModalHandler = () => {
    setTaskModal(!taskModal);
  };
  const handleCloseModal = () => {
    setTaskModal(false);
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="h-full py-5">
        <Seperator orientation="vertically" />
        <Flex className="h-full" gap="S">
          {boards.map((board) => (
            <Board
              key={board.id}
              board={board}
              workspace={Number(workspaceId)}
              project={Number(projectId)}
              handleUpdateBoard={handleUpdateBoard}
              handleDeleteBoard={handleDeleteBoard}
            />
          ))}
          {/* //here use add board */}
          <NewBoard
            workspaceId={Number(workspaceId)}
            projectId={Number(projectId)}
            handleAddBoard={handleAddBoard}
          />
        </Flex>
        <Button
          color="brand"
          className="fixed bottom-6 left-6 flex gap-1 items-center"
          onClick={newTaskModalHandler}
        >
          <Icon iconName="SquarePlus" stroke="#FFF" />
          تسک جدید
        </Button>
        {taskModal && (
          <NewTask
            location="columnView"
            boards={boards}
            onClose={handleCloseModal}
          ></NewTask>
        )}
      </div>
    </DragDropContext>
  );
};

export default TaskboardColumnView;
