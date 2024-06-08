import React, { FC } from "react";
import Flex from "../ui/Flex";
import Icon from "../ui/Icon";
import Heading from "../ui/Heading";
import { useAccordionStore } from "../../hooks/useAccordionStore";

interface HeadProps {
  id: string;
  title: string;
}

const Head: FC<HeadProps> = ({ id, title }) => {
  const { openAccordions } = useAccordionStore();
  const isOpen = openAccordions.includes(id);

  return (
    <Flex alignItems="center" className="cursor-pointer">
      <Icon
        iconName="ChevronDown"
        className={`border-2 border-gray-darker rounded-full w-6 h-6 transition-transform ${
          isOpen ? "" : "rotate-180"
        }`}
      />
      <Heading as="h3" className="ml-2">
        {title}
      </Heading>
    </Flex>
  );
};

export default Head;
