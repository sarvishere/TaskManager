import useRadioStore from "../../hooks/useRadioStore";
import Flex from "../ui/Flex";
import Icon from "../ui/Icon";
import { priorities } from "./priorities";

interface FlagSelectionProps {
  onClose: () => void;
  visible: boolean;
}
const FlagSelection: React.FC<FlagSelectionProps> = ({ onClose, visible }) => {
  if (!visible) return null;

  const [selectedValue, setSelectedValue] = useRadioStore((state) => [
    state.selectedValue,
    state.setSelectedValue,
  ]);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(+event.target.value);
    onClose();
  };
  const handleRemovePriority = () => {
    setSelectedValue(0);
    onClose();
  };
  return (
    <div className="flex flex-col gap-1 bg-white shadow-modal w-min rounded-lg text-nowrap text-sm absolute bottom-16">
      <Flex direction="col">
        {priorities.map((item) => {
          return (
            <label
              key={item.id}
              htmlFor={`${item.id}`}
              className="cursor-pointer w-full p-1 flex items-center gap-2 hover:bg-gray-secondary"
            >
              <Icon iconName="Flag" stroke={item.color} />
              <span>{item.name}</span>
              <input
                id={`${item.id}`}
                value={item.id}
                name="priority"
                type="radio"
                className="hidden"
                checked={selectedValue === item.id}
                onChange={handleRadioChange}
              />
            </label>
          );
        })}
      </Flex>
      <label
        className=" cursor-pointer flex items-center gap-2 p-1 pl-12 hover:bg-gray-secondary"
        onClick={handleRemovePriority}
      >
        <span className="flex items-center w-[16px] h-[17px]">
          <Icon iconName="Close" stroke="#FA5252" />
        </span>
        <span>حذف اولویت</span>
      </label>
    </div>
  );
};
export default FlagSelection;
