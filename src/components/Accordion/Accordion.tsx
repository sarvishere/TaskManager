import { animated, useSpring } from "react-spring";
import { useAccordionStore } from "../../hooks/useAccordionStore";
import Flex from "../ui/Flex";

interface AccordionProps {
  id: string;
  head: React.ReactNode;
  children: React.ReactNode;
}

const Accordion = ({ id, head, children }: AccordionProps) => {
  const { openAccordions, toggleAccordion } = useAccordionStore();
  const isOpen = openAccordions.includes(id);

  const animation = useSpring({
    from: {
      height: 0,
      opacity: 0,
    },
    to: {
      height: isOpen ? "auto" : 0,
      opacity: isOpen ? 1 : 0,
    },
    config: { friction: 100 },
  });

  return (
    <Flex direction="col">
      <div
        className="w-full cursor-pointer py-5"
        onClick={() => toggleAccordion(id)}
      >
        {head}
      </div>
      <animated.div style={animation} className="w-full overflow-hidden">
        {children}
      </animated.div>
    </Flex>
  );
};
export default Accordion;
