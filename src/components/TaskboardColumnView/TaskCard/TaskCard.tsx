import styles from "./styles.module.css";
import Button from "../../ui/Button";
import Flex from "../../ui/Flex";
import Icon from "../../ui/Icon";
import Text from "../../ui/Text";
import TagBadge from "../TagBadge";
import Heading from "../../ui/Heading";
import Avatar from "../../ui/Avatar";

interface Props {
  image?: string;
}

const TaskCard: React.FC<Props> = ({ image }) => {
  return (
    <div
      className={`${styles.multipleShadows} group w-[250px] bg-white rounded-lg p-4 `}
    >
      <Flex direction="col" gap="S">
        <img src={image} className=" object-cover w-full rounded-[4px]" />
        <Flex justifyContent="between" alignItems="center">
          <Text className="text-[#534D60]">پروژه اول</Text>
          <Avatar
            className="hidden group-hover:block"
            firstName="A"
            lastName="S"
          />
        </Flex>
        <Flex>
          <Heading as="h3" weight="400" className="text-xs">
            این یک تیتر برای این تسک است.
          </Heading>
          <Icon iconName="Description" />
        </Flex>
        <Flex gap="XS">
          <Icon iconName="Flag" />
          <Text className="whitespace-nowrap">۵ مهر - فردا</Text>
          <Flex>
            <Icon iconName="CheckBox" />
            <Text className="text-[#BDC0C6]">۲ / ۱۲</Text>
          </Flex>
        </Flex>
        <Flex>
          <TagBadge color="grape">پروژه</TagBadge>
          <TagBadge color="blue">درس</TagBadge>
        </Flex>
        <Flex direction="col" gap="S" className="hidden group-hover:flex">
          <div className=" w-full h-[1px] bg-[#EFF0F0]"></div>
          <Flex justifyContent="between">
            <Button asChild>
              <Icon iconName="CircleTicked" />
            </Button>
            <Button asChild>
              <Icon iconName="More" />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default TaskCard;
