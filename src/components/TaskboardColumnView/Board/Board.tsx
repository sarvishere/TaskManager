import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import ColumnDropdownMenu from "../ColumnDropdowMenu/ColumnDropdownMenu";
import TaskCountBadge from "../TaskCountBadge/TaskCountBadge";
import Flex from "../../ui/Flex";
import Text from "../../ui/Text";
import Button from "../../ui/Button";
import Icon from "../../ui/Icon";
import TaskCard from "../TaskCard/TaskCard";
import { Droppable } from "react-beautiful-dnd";
import NewTask from "../../NewTask/NewTask";
import useTasks from "../../../hooks/useTasks";
import { useParams } from "react-router-dom";
import useUpdateBoard from "../../../hooks/useUpdateBoard";

interface BoardProps {
  board: any;
  workspace: number;
  project: number;
  handleDeleteBoard: (id: number) => void;
  handleUpdateBoard: (title: string, id: number) => void;
}

const Board: React.FC<BoardProps> = ({
  board,
  workspace,
  project,
  handleDeleteBoard,
  handleUpdateBoard,
}) => {
  const EditBoxRef = useRef<HTMLInputElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(board.name);
  const [taskModal, setTaskModal] = useState(false);

  // To get all tasks
  const { getAllTasks, tasks, setTasks } = useTasks();
  const { updateBoard } = useUpdateBoard();
  const { workspaceId, projectId } = useParams();
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  useEffect(() => {
    if (isEditing) {
      EditBoxRef.current?.focus();
    }
  }, [isEditing]);

  useEffect(() => {
    getAllTasks(workspace, project, board.id);
  }, [workspace, project, board.id]);

  const handleEdit = () => {
    setIsEditing(true);
    setShowDropdown(false);
  };

  const handleClickOutside = () => {
    setShowDropdown(false);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleKeyboardEvents = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSaveChanges();
    } else if (e.key === "Escape") handleDiscardChanges();
  };

  const handleSaveChanges = () => {
    handleUpdateBoard(title, board.id);
    //here add useupdatetitle || err
    updateBoard(Number(workspaceId), Number(projectId), board.id, title);
    setIsEditing(false);
  };

  const handleDiscardChanges = () => {
    setIsEditing(false);
    setTitle(board.name);
  };

  const handleTaskModal = () => {
    setTaskModal(true);
  };

  return (
    <div>
      <div
        key={board.id}
        className={`group relative flex justify-between items-center w-[250px] h-10 rounded-2xl shadow-[0_3px_4px_0_rgba(0,0,0,0.2)] bg-white py-2 px-3 border-t-2 ${board.color}`}
      >
        <ColumnDropdownMenu
          boardId={board.id}
          onDelete={handleDeleteBoard}
          onEdit={handleEdit}
          visible={showDropdown}
          onClickOutside={handleClickOutside}
        />
        <Flex className="space-x-1" alignItems="center">
          {!isEditing && (
            <Flex alignItems="center">
              <Text className=" max-w-28 truncate" size="M" weight="500">
                {title}
              </Text>
              <TaskCountBadge count={board.tasks_count} />
            </Flex>
          )}
          {isEditing && (
            <Flex alignItems="center">
              <input
                ref={EditBoxRef}
                onChange={handleOnChange}
                value={title}
                onBlur={handleSaveChanges}
                onKeyDown={handleKeyboardEvents}
                type="text"
                className="font-iranyekan w-full outline-none border-none"
              />
              <Button asChild onClick={handleDiscardChanges}>
                <Icon iconName="Close" />
              </Button>
              <Button asChild onClick={handleSaveChanges}>
                <Icon iconName="Tick" width={20} height={20} />
              </Button>
            </Flex>
          )}
        </Flex>
        {!isEditing && (
          <div className="hidden basis-1/5 flex-shrink-0 group-hover:flex relative space-x-1">
            <Button asChild onClick={toggleDropdown}>
              <Icon iconName="More" />
            </Button>
            <Button asChild onClick={handleTaskModal}>
              <Icon iconName="Add" />
            </Button>
            {taskModal && (
              <NewTask
                location="board"
                boardId={board.id}
                boardName={board.name}
                onClose={() => setTaskModal(false)}
              ></NewTask>
            )}
          </div>
        )}
      </div>
      <Droppable droppableId={String(board.id)}>
        {(provided) => (
          <div
            className="flex mt-2 gap-2 flex-col"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks &&
              tasks.map((task, index) => (
                <TaskCard
                  key={task.id}
                  index={index}
                  task={task}
                  boardId={board.id}
                  setTasks={setTasks}
                />
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Board;
