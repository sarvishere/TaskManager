import CloseIcon from "../../assets/Icons/CloseIcon.svg";
import Button from "../ui/Button";
import Flex from "../ui/Flex";
import Heading from "../ui/Heading";
import Text from "../ui/Text";

interface Props {
  visible?: boolean;
  onClose: () => void;
}

const TermsModal = ({ visible, onClose }: Props) => {
  return (
    <div
      className={`${
        !visible && "hidden"
      } fixed h-screen w-screen z-50 inset-0 bg-[#17191B]/60 backdrop-blur-sm flex justify-center items-center`}
    >
      <div className="relative bg-white max-w-[800px] w-full rounded-[20px] pt-6 pr-6 pb-8 pl-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.3)]">
        <Button onClick={onClose} asChild>
          <img
            className="absolute top-3 left-4"
            src={CloseIcon}
            alt="CloseIcon"
          />
        </Button>
        <Heading className="mb-8" as="h2" size="L" align="center">
          قوانین و مقررات
        </Heading>
        <Flex>
          <Text size="M"> امیدوارم به کارتون بیاد رفقا! قانونی نداریم :D</Text>
        </Flex>
      </div>
    </div>
  );
};

export default TermsModal;
