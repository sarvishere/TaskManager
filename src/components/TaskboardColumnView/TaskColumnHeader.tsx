import { ChangeEvent, useEffect, useRef, useState } from "react";
import TaskCountBadge from "./TaskCountBadge";
import Flex from "../ui/Flex";
import Text from "../ui/Text";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import ColumnDropdownMenu from "./ColumnDropdowMenu/ColumnDropdownMenu";

interface Props {
  className?: string;
  columnTitle: string;
}

const TaskColumnHeader: React.FC<Props> = ({ className, columnTitle }) => {
  const EditBoxRef = useRef<HTMLInputElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState({
    currentTitle: "",
    title: columnTitle,
  });

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
    setTitle({ ...title, currentTitle: e.target.value });
  };

  const handleSaveChanges = () => {
    setTitle((prev) => ({ ...prev, title: prev.currentTitle }));
    setIsEditing(false);
  };
  const handleDiscardChanges = () => {
    setIsEditing(false);
  };

  return (
    <div
      className={`group relative flex justify-between items-center w-[250px] h-10 rounded-[16px] shadow-[0_3px_4px_0_rgba(0,0,0,0.2)] bg-white py-2 px-3 border-t-2  ${className}`}
    >
      <ColumnDropdownMenu
        onEdit={handleEdit}
        visible={showDropdown}
        onClickOutside={handleClickOutside}
        boardId={0}
      />
      <Flex className="space-x-1" alignItems="center">
        {!isEditing && (
          <Flex alignItems="center">
            <Text size="M" weight="500">
              {title.title}
            </Text>
            <TaskCountBadge count={0} />
          </Flex>
        )}
        {isEditing && (
          <Flex alignItems="center">
            <input
              ref={EditBoxRef}
              defaultValue={title.title}
              onChange={handleOnChange}
              type="text"
              className="w-full outline-none border-none"
            />
            <Button asChild onClick={handleDiscardChanges}>
              <Icon iconName="Close" />
            </Button>
            <Button asChild onClick={handleSaveChanges}>
              <Icon iconName="Tick" />
            </Button>
          </Flex>
        )}
      </Flex>
      {!isEditing && (
        <div className="hidden group-hover:flex relative space-x-1">
          <Button asChild onClick={toggleDropdown}>
            <Icon iconName="More" />
          </Button>
          <Button asChild>
            <Icon iconName="Add" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default TaskColumnHeader;
