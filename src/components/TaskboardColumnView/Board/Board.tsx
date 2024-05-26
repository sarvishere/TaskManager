import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import ColumnDropdownMenu from "../ColumnDropdowMenu/ColumnDropdownMenu";
import TaskCountBadge from "../TaskCountBadge/TaskCountBadge";
import Flex from "../../ui/Flex";
import Text from "../../ui/Text";
import Button from "../../ui/Button";
import Icon from "../../ui/Icon";
import TaskCard from "../TaskCard/TaskCard";
import {
  BoardResponse,
  UpdateBoardData,
} from "../../../services/board-service";
import { Droppable } from "react-beautiful-dnd";
import NewTask from "../../NewTask/NewTask";

interface BoardProps {
  board: BoardResponse;
  onDeleteBoard: (id: number) => void;
  onUpdateBoard: (title: string, id: number) => void;
  onArchiveBoard: (id: number, board: UpdateBoardData) => void;
}

const Board: React.FC<BoardProps> = ({
  board,
  onDeleteBoard,
  onUpdateBoard,
  onArchiveBoard,
}) => {
  const EditBoxRef = useRef<HTMLInputElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(board.name);
  const [taskModal,setTaskModal]=useState(false);
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  useEffect(() => {
    if (!isEditing) return;
    
    EditBoxRef.current?.focus();
  }, [isEditing]);

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
    onUpdateBoard(title, board.id);
    setIsEditing(false);
  };

  const handleDiscardChanges = () => {
    setIsEditing(false);
  };

  const handleTaskModal=()=>{
    setTaskModal(true);
  }
  return (
    <div>
      <div
        key={board.id}
        className={`group relative flex justify-between items-center w-[250px] h-10 rounded-2xl shadow-[0_3px_4px_0_rgba(0,0,0,0.2)] bg-white py-2 px-3 border-t-2 ${board.color}`}
      >
        <ColumnDropdownMenu
          boardId={board.id}
          onDelete={() => onDeleteBoard(board.id)}
          onArchive={() => onArchiveBoard(board.id, board)}
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
                defaultValue={title}
                onChange={handleOnChange}
                onBlur={() => setIsEditing(false)}
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
            {taskModal&&<NewTask location="board" boardId={board.id} boardName={board.name} onClose={()=>setTaskModal(false)}></NewTask>}
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
            {board.tasks.map((task, index) => (
              <TaskCard key={task.id} index={index} task={task} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Board;
