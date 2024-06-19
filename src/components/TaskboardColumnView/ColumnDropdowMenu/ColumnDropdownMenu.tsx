import { FC, useEffect, useRef } from "react";
import Button from "../../ui/Button";
import Flex from "../../ui/Flex";
import Icon from "../../ui/Icon";
import Text from "../../ui/Text";
import useDeleteBoard from "../../../hooks/useDeleteBoard";
import { useParams } from "react-router-dom";

interface Props {
  boardId: number;
  visible: boolean;
  onClickOutside?: () => void;
  onEdit?: () => void;
  onDelete: (id: number) => void;
}

const useClickOutside = (handler: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handler]);

  return ref;
};

const ColumnDropdownMenu: FC<Props> = ({
  visible,
  onClickOutside,
  onEdit,
  onDelete,
  boardId,
}) => {
  const { deleteBoard } = useDeleteBoard();
  const { workspaceId, projectId } = useParams();

  const dropdownRef = useClickOutside(() => {
    onClickOutside?.();
  });

  const handleDeleteBoard = () => {
    deleteBoard(Number(workspaceId), Number(projectId), boardId);
    onDelete(boardId);
  };

  return (
    visible && (
      <div
        ref={dropdownRef}
        className="absolute top-[100%] left-6 w-[166px] h-[90px] p-3 bg-white shadow-[0_4px_16px_0_rgba(0, 0.16, 0.16, 0.80)] shadow-lg"
      >
        <Flex direction="col" gap="S">
          <Button onClick={onEdit} asChild className="text-sm">
            <Flex alignItems="center">
              <Icon iconName="Edit" />
              <Text size="S">ویرایش نام ستون</Text>
            </Flex>
          </Button>

          <Button asChild className="text-sm">
            <button onClick={handleDeleteBoard}>
              <Flex alignItems="center">
                <Icon iconName="Remove" />
                <Text size="S">حذف ستون</Text>
              </Flex>
            </button>
          </Button>
        </Flex>
      </div>
    )
  );
};

export default ColumnDropdownMenu;
