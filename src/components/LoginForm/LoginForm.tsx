import Button from "../Button";
import Card from "../Card";
import Flex from "../Flex";
import Heading from "../Heading";
import Input from "../Input";
import Link from "../Link";
import Text from "../Text";

const LoginForm = () => {
  return (
    <form>
      <Card>
        <Heading align="center" className="mb-8" as="h2" size="L">
          به کوئرا تسک منیجر خوش برگشتی :)
        </Heading>
        <Flex gap="L" direction="col">
          <Flex gap="M" direction="col">
            <Input id="username" label="نام کاربری" />
            <Flex direction="col">
              <Input type="password" id="password" label="رمز عبور" />
              <Link to="/forgot" underline>
                رمز عبور خود را فراموش کرده‌اید؟
              </Link>
            </Flex>
          </Flex>
          <Flex className="" gap="M" direction="col">
            <Button color="brand" size="full">
              ورود
            </Button>
            <Flex gap="XS" justifyContent="center" alignItems="center">
              <Text size="M" weight="500">
                ثبت‌نام نکرده‌ای؟
              </Text>
              <Link to="/" color="brand" weight="800" size="M">
                ثبت نام
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </form>
  );
};

export default LoginForm;
