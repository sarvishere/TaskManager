import React, { FC } from "react";
import Accordion from "../Accordion/Accordion";
import Flex from "../ui/Flex";
import Icon from "../ui/Icon";
import Heading from "../ui/Heading";
import { useAccordionStore } from "../../hooks/useAccordionStore";

interface TaskProjectProps {
  id: string;
  title: string;
}

const TaskProject: FC<TaskProjectProps> = ({ id, title }) => {
  const { openAccordions } = useAccordionStore();
  const isOpen = openAccordions.includes(id);
  return (
    <Flex alignItems="center" className=" cursor-pointer">
      <Icon
        iconName="ChevronDown"
        className={`border-2 border-gray-darker rounded-full w-6 h-6 ${
          isOpen ? "" : "rotate-180"
        }`}
      />
      <Heading as="h3">{title}</Heading>
    </Flex>
  );
};
export default TaskProject;
