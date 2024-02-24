import Button from "../../ui/Button";
import Flex from "../../ui/Flex";
import Icon from "../../ui/Icon";
import Seperator from "../../ui/Seperator";
import Text from "../../ui/Text";

const TaskBoardToolbar = () => {
  return (
    <Flex className="my-2 border-y py-2 " alignItems="center" gap="XL">
      <Flex width="w-fit">
        <Icon iconName="Search" />
        <input
          placeholder="جستجو بین تسک‌ها"
          className=" font-iranyekan outline-none placeholder:font-iranyekan placeholder:text-xs"
        />
      </Flex>

      <Seperator orientation="vertically" />
      <div className="flex justify-between w-[754px]">
        <Flex width="w-fit" gap="S">
          <Flex className="w-fit" alignItems="center">
            <Button asChild>
              <Icon iconName="Filter" />
            </Button>
            <Text>فیلترها</Text>
          </Flex>
          <Text
            weight="400"
            className="bg-blue-secondary whitespace-nowrap py-1 px-3 rounded"
            color="blue"
          >
            دسته‌بندی‌شده با: وضعیت
          </Text>
        </Flex>
        <Button
          className="flex items-center gap-2 border py-1 px-2 border-brand-primary rounded-lg"
          asChild
          color="brand"
        >
          <Icon iconName="Restore" />
          <Text className="whitespace-nowrap">بازگردانی تسک های آرشیو شده</Text>
        </Button>
      </div>
    </Flex>
  );
};

export default TaskBoardToolbar;
