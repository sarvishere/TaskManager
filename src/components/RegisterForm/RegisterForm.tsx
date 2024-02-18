import Button from "../Button";
import Card from "../Card";
import CheckBox from "../CheckBox";
import Flex from "../Flex";
import Heading from "../Heading";
import Input from "../Input";
import Link from "../Link";

const RegisterForm = () => {
  return (
    <form>
      <Card>
        <Heading align="center" className="mb-8" as="h2" size="L">
          ثبت‌نام در کوئرا تسک منیجر
        </Heading>
        <Flex gap="M" direction="col">
          <Input id="username" label="نام کاربری" />
          <Input type="email" id="email" label="ایمیل" />
          <Input type="password" id="password" label="رمز عبور" />
          <CheckBox
            id="rules"
            label={
              <span>
                <Link to="" size="M" underline>
                  قوانین و مقررات
                </Link>{" "}
                را می‌پذیرم.
              </span>
            }
          />
          <Button color="brand" size="full">
            ثبت‌نام
          </Button>
        </Flex>
      </Card>
    </form>
  );
};

export default RegisterForm;
