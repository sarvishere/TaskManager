import React, { useEffect, useRef, useState, useContext } from "react";
import Flex from "../../ui/Flex";
import Button from "../../ui/Button";
import Icon from "../../ui/Icon";
import NewTask from "../../NewTask/NewTask";
import TaskCountBadge from "../TaskCountBadge";
import useUpdateBoard from "../../../hooks/useUpdateBoard";
import { useParams } from "react-router-dom";
import ColumnDropdownMenu from "../ColumnDropdowMenu/ColumnDropdownMenu";
import { BoardContext } from "../../../layout/Board";

interface HeaderProps {
  handleDeleteBoard: (id: number) => void;
  handleUpdateBoard: (title: string, id: number) => void;
  boardId: number;
  boardColor: string;
  boardTask: number;
  boardName: string;
  setTasks: any;
}

const Header = ({
  handleDeleteBoard,
  handleUpdateBoard,
  boardId,
  boardColor,
  boardTask,
  boardName,
  setTasks,
}: HeaderProps) => {
  const EditBoxRef = useRef<HTMLInputElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(boardName);
  const [taskModal, setTaskModal] = useState(false);
  const { updateBoard } = useUpdateBoard();
  const { workspaceId, projectId } = useParams();

  const { incrementTaskCount } = useContext(BoardContext); // Use the context

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  useEffect(() => {
    if (isEditing) {
      EditBoxRef.current?.focus();
    }
  }, [isEditing]);

  const handleEdit = () => {
    setIsEditing(true);
    setShowDropdown(false);
  };

  const handleClickOutside = () => {
    setShowDropdown(false);
  };

  const handleOnChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleSaveChanges = () => {
    handleUpdateBoard(title, boardId);
    updateBoard(Number(workspaceId), Number(projectId), boardId, {
      name: title,
    })
      .then(() => {
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Failed to update the board:", error);
      });
  };

  const handleDiscardChanges = () => {
    setIsEditing(false);
    setTitle(boardName);
  };

  const handleKeyboardEvents = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSaveChanges();
    } else if (e.key === "Escape") handleDiscardChanges();
  };

  const handleTaskModal = () => {
    setTaskModal(true);
  };

  return (
    <div
      key={boardId}
      className={
        "group relative flex justify-between items-center w-[250px] h-10 rounded-2xl shadow-[0_3px_4px_0_rgba(0,0,0,0.2)] bg-white py-2 px-3 border-t-2 "
      }
      style={{ borderColor: boardColor }}
    >
      <ColumnDropdownMenu
        boardId={boardId}
        onDelete={handleDeleteBoard}
        onEdit={handleEdit}
        visible={showDropdown}
        onClickOutside={handleClickOutside}
      />
      <Flex className="space-x-1" alignItems="center">
        {!isEditing && (
          <Flex alignItems="center" color={boardColor}>
            <p>{title}</p>
            <TaskCountBadge count={boardTask} />
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
              boardId={boardId}
              boardName={boardName}
              onClose={() => setTaskModal(false)}
              setTasks={setTasks}
              incrementTaskCount={incrementTaskCount} // Pass incrementTaskCount
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
