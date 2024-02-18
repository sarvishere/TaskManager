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
          فراموشی رمز عبور
        </Heading>
        <Flex gap="M" direction="col" alignItems="center">
          <Input type="email" id="email" label="ایمیل خود را وارد کنید" />
          <Button color="brand" size="full">
            دریافت ایمیل بازیابی رمز عبور
          </Button>
          <Link color="brand" to="/login" size="M" weight="800">
            بازگشت
          </Link>
        </Flex>
      </Card>
    </form>
  );
};

export default RegisterForm;
