import { useParams } from "react-router-dom";
import { useAccordionStore } from "../../hooks/useAccordionStore";
import { BoardContext } from "../../layout/Board";
import Button from "../ui/Button";
import Flex from "../ui/Flex";
import Icon from "../ui/Icon";
import Text from "../ui/Text";
import { FC, useContext } from "react";
import useDeleteBoard from "../../hooks/useDeleteBoard";

interface BoardListViewProps {
  BoardName: string;
  BoardId: number;
  BoardColor: string;
  BoardTask: string;
}

const BoardListView: FC<BoardListViewProps> = ({
  BoardName,
  BoardId,
  BoardColor,
  BoardTask,
}: BoardListViewProps) => {
  const { openAccordions } = useAccordionStore();
  const isOpen = openAccordions.includes(BoardId.toString());
  const { handleDeleteBoard } = useContext(BoardContext);
  const { workspaceId, projectId } = useParams();
  const { deleteBoard } = useDeleteBoard();

  const DeleteBoard = () => {
    deleteBoard(Number(workspaceId), Number(projectId), BoardId);
    handleDeleteBoard(BoardId);
  };

  return (
    <Flex width="w-full">
      <Flex alignItems="center" className="basis-4/12">
        <Icon
          iconName="ChevronDown"
          className={`border-2 border-gray-darker rounded-full w-5 h-5 cursor-pointer ${
            isOpen ? "" : "rotate-180"
          }`}
        />
        <span className={`bg-${BoardColor}-primary py-1 px-[6px] rounded ml-2`}>
          <Text size="S" weight="500">
            {BoardName}
          </Text>
        </span>
        <Text size="S" weight="500" className="ml-2">
          تسک: {BoardTask}
        </Text>

        <Button
          variant="outline"
          size="small"
          weight="500"
          className={`border-red-primary text-red-primary rounded-[15px] flex items-center justify-center border  ${
            isOpen ? "invisible" : "visible"
          } `}
          onClick={DeleteBoard}
        >
          حذف برد
        </Button>
      </Flex>

      <Text
        size="L"
        weight="500"
        className={`basis-2/12 ${isOpen ? "visible" : "invisible"}`}
      >
         تاریخ شروع
      </Text>

      <Text
        size="L"
        weight="500"
        className={`basis-2/12 ${isOpen ? "visible" : "invisible"}`}
      >
        توضیحات
      </Text>
    </Flex>
  );
};

export default BoardListView;
