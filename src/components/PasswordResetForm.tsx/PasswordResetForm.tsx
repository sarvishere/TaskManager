import Button from "../ui/Button";
import Card from "../ui/Card";
import Flex from "../ui/Flex";
import Heading from "../ui/Heading";
import Input from "../ui/Input";
import Link from "../ui/Link";

const RegisterForm = () => {
  return (
    <Card>
      <Heading align="center" className="mb-8" as="h2" size="L">
        فراموشی رمز عبور
      </Heading>
      <form>
        <Flex gap="M" direction="col" alignItems="center">
          <Input type="email" id="email" label="ایمیل خود را وارد کنید" />
          <Button type="submit" color="brand" size="full">
            دریافت ایمیل بازیابی رمز عبور
          </Button>
          <Link color="brand" to="/" size="M" weight="800">
            بازگشت
          </Link>
        </Flex>
      </form>
    </Card>
  );
};

export default RegisterForm;
