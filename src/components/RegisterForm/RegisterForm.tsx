import { useState } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import CheckBox from "../ui/CheckBox";
import Flex from "../ui/Flex";
import Heading from "../ui/Heading";
import Input from "../ui/Input";
import Text from "../ui/Text";
import { TermsModal } from "../TermsModal";

const RegisterForm = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Card>
      <Heading align="center" className="mb-8" as="h2" size="L">
        ثبت‌نام در کوئرا تسک منیجر
      </Heading>
      <form>
        <Flex gap="M" direction="col">
          <Input id="username" label="نام کاربری" />
          <Input type="email" id="email" label="ایمیل" />
          <Input type="password" id="password" label="رمز عبور" />
          <CheckBox
            id="rules"
            label={
              <span>
                <Button onClick={handleOpenModal} asChild>
                  <Text className="underline underline-offset-8" size="M">
                    قوانین و مقررات
                  </Text>
                </Button>{" "}
                را می‌پذیرم.
              </span>
            }
          />
          <TermsModal visible={showModal} onClose={handleCloseModal} />
          <Button type="submit" color="brand" size="full">
            ثبت‌نام
          </Button>
        </Flex>
      </form>
    </Card>
  );
};

export default RegisterForm;
