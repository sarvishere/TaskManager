import { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { toast } from "react-toastify";
import useAddBoard from "../../hooks/useAddBoard";
import useAddTask from "../../hooks/useAddTask";
import useBoards from "../../hooks/useBoards";
import useDeleteBoard from "../../hooks/useDeleteBoard";
import useDeleteTask from "../../hooks/useDeleteTask";
import useUpdateBoard from "../../hooks/useUpdateBoard";
import { UpdateBoardData } from "../../services/board-service";
import { Task } from "../../services/task-service";
import Button from "../ui/Button";
import Flex from "../ui/Flex";
import Icon from "../ui/Icon";
import Seperator from "../ui/Seperator";
import Text from "../ui/Text";
import Board from "./Board/Board";
import TaskBoardToolbar from "./TaskBoardToolbar/TaskBoardToolbar";

const TaskboardColumnView = () => {
  const [showArchive, setShowArchive] = useState(false);
  const { getBoards, boards, setBoards } = useBoards();
  const { addBoard, addedBoard, addError } = useAddBoard();
  const { deleteBoard, error } = useDeleteBoard();
  const { addTask } = useAddTask();
  const { deleteTask } = useDeleteTask();
  const { updateBoard, boardUpdateError, updatedBoard } = useUpdateBoard();
  const workspaceId = 2;
  const projectId = 2;

  useEffect(() => {
    getBoards(2, 2);
  }, []);

  const tempId = new Date().getTime();
  const handleAddBoard = async () => {
    const originalBoards = [...boards];
    const data = {
      color: "border-red-primary",
      name: "Todo",
      order: boards.length + 1,
      is_archive: false,
    };

    setBoards([...boards, { ...data, id: tempId, tasks: [], tasks_count: 0 }]);
    await addBoard(2, 2, data);

    if (addedBoard)
      setBoards((prevBoards) =>
        prevBoards.map((b) => (b.id === tempId ? addedBoard : b))
      );
    else if (addError) {
      setBoards(originalBoards);
      toast.error(
        <Text size="M" weight="500">
          افزودن بورد با مشکل مواجه شد
        </Text>
      );
    }
  };

  const handleUpdateBoard = async (title: string, boardId: number) => {
    await updateBoard(workspaceId, projectId, boardId, {
      name: title,
    });
    if (updatedBoard)
      setBoards((prevBoards) =>
        prevBoards.map((b) => (b.id === boardId ? { ...b, name: title } : b))
      );
  };

  const handleDeleteBoard = async (boardId: number) => {
    const originalBoards = [...boards];

    setBoards((prevBoards) => prevBoards.filter((b) => b.id !== boardId));
    await deleteBoard(workspaceId, projectId, boardId);

    if (error) {
      setBoards(originalBoards);
      toast.error(
        <Text size="M" weight="500">
          خطایی در حذف بورد رخ داده است
        </Text>
      );
    }
  };

  const handleArchiveBoard = async (
    boardId: number,
    board: UpdateBoardData
  ) => {
    const originalBoards = [...boards];
    setShowArchive(false);

    setBoards((prevBoards) =>
      prevBoards.map((b) => (b.id === boardId ? { ...b, is_archive: true } : b))
    );
    await updateBoard(workspaceId, projectId, boardId, {
      ...board,
      is_archive: true,
    });
    if (boardUpdateError) {
      setBoards(originalBoards);
      toast.error(
        <Text size="M" weight="500">
          خطایی در آرشیو کردن رخ داده است
        </Text>
      );
    }
  };

  const handleRestoreArchivedTasks = () => {
    setShowArchive(true);

    boards.forEach(async (b) => {
      if (b.is_archive)
        await updateBoard(workspaceId, projectId, b.id, {
          ...b,
          is_archive: false,
        });
    });
    setBoards((prevBoards) =>
      prevBoards.map((b) => (b.is_archive ? { ...b, is_archive: false } : b))
    );
  };

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
        addTask(workspaceId, projectId, destinationBoardId, {
          ...movedTask,
          thumbnail: "",
          attachment: "",
        });
        deleteTask(workspaceId, projectId, sourceBoardId, movedTask.id);
      }
    }
  };

  // Function to reorder tasks within the same board
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

  const filteredBoards = boards.filter((b) =>
    showArchive ? b : b.is_archive === false
  );

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="h-full">
        <TaskBoardToolbar onRestoreArchivedTasks={handleRestoreArchivedTasks} />
        <Seperator orientation="vertically" />
        <Flex className="h-full" gap="S">
          {filteredBoards.map((board) => (
            <Board
              key={board.id}
              board={board}
              onUpdateBoard={handleUpdateBoard}
              onDeleteBoard={handleDeleteBoard}
              onArchiveBoard={handleArchiveBoard}
            />
          ))}
          <Button
            onClick={handleAddBoard}
            className="flex items-center flex-shrink-0 shadow-[0_3px_4px_0_rgba(0,0,0,0.2)] rounded-2xl w-[250px] h-[40px] py-2 px-3 bg-white"
            asChild
          >
            <Icon iconName="Add" />
            <Text size="M" weight="500">
              ساختن برد جدید
            </Text>
          </Button>
        </Flex>
        <Button
          color="brand"
          className="fixed bottom-6 left-6 flex gap-1 items-center"
        >
          <Icon iconName="SquarePlus" stroke="#FFF" />
          تسک جدید
        </Button>
      </div>
    </DragDropContext>
  );
};

export default TaskboardColumnView;
