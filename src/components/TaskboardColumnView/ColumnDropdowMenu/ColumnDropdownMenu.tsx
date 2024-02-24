import { FC, useEffect, useRef } from "react";
import Button from "../../ui/Button";
import Flex from "../../ui/Flex";
import Icon from "../../ui/Icon";
import Text from "../../ui/Text";

interface Props {
  visible: boolean;
  onClickOutside?: () => void;
  onEdit?: () => void;
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

const ColumnDropdownMenu: FC<Props> = ({ visible, onClickOutside, onEdit }) => {
  const dropdownRef = useClickOutside(() => {
    onClickOutside?.();
  });

  return (
    visible && (
      <div
        ref={dropdownRef}
        className="absolute top-[100%] left-0 w-[166px] h-[152px] rounded-lg p-3 bg-white shadow-[0_4px_16px_0_rgba(0, 0, 0, 0.16)] shadow-lg"
      >
        <Flex direction="col" gap="S">
          <Button onClick={onEdit} asChild className="text-sm">
            <Flex alignItems="center">
              <Icon iconName="Edit" />
              <Text size="S">ویرایش نام ستون</Text>
            </Flex>
          </Button>
          <Button asChild className="text-sm">
            <Flex alignItems="center">
              <Icon iconName="Add" />
              <Text size="S">افزودن تسک</Text>
            </Flex>
          </Button>
          <Button asChild className="text-sm">
            <Flex alignItems="center">
              <Icon iconName="Archive" />
              <Text size="S">آرشیو تمام تسک‌ها</Text>
            </Flex>
          </Button>
          <Button asChild className="text-sm">
            <Flex alignItems="center">
              <Icon iconName="Remove" />
              <Text size="S">حذف ستون</Text>
            </Flex>
          </Button>
        </Flex>
      </div>
    )
  );
};

export default ColumnDropdownMenu;
