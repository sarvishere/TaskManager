import { useAccordionStore } from "../../hooks/useAccordionStore";
import Flex from "../ui/Flex";
import Icon from "../ui/Icon";
import Text from "../ui/Text";
import { FC } from "react";

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

  return (
    <Flex className="w-full text-center pr-8">
      <Flex alignItems="center" className="basis-4/12">
        <Icon
          iconName="ChevronDown"
          className={`border-2 border-gray-darker rounded-full w-5 h-5 ${
            isOpen ? "" : "rotate-180"
          }`}
        />
        <span className={`bg-${BoardColor}-primary  py-1 px-[6px] rounded`}>
          <Text size="L" weight="500">
            {BoardName}
          </Text>
        </span>
        <Text size="M" weight="500">
          تسک: {BoardTask}
        </Text>
      </Flex>

      <Text
        size="L"
        weight="500"
        className={`basis-2/12 ${isOpen ? "visible" : "invisible"}`}
      >
        ددلاین
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
