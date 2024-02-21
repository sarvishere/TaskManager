import Button from "../ui/Button";
import Card from "../ui/Card";
import Flex from "../ui/Flex";
import Heading from "../ui/Heading";
import Input from "../ui/Input";
import Link from "../ui/Link";
import Text from "../ui/Text";

const LoginForm = () => {
  return (
    <Card>
      <Heading align="center" className="mb-8" as="h2" size="L">
        به کوئرا تسک منیجر خوش برگشتی :)
      </Heading>
      <form>
        <Flex gap="L" direction="col">
          <Flex gap="M" direction="col">
            <Input id="username" label="نام کاربری" />
            <Flex direction="col">
              <Input type="password" id="password" label="رمز عبور" />
              <Link to="/forgot-password" underline>
                رمز عبور خود را فراموش کرده‌اید؟
              </Link>
            </Flex>
          </Flex>
          <Flex className="" gap="M" direction="col">
            <Button type="submit" color="brand" size="full">
              ورود
            </Button>
            <Flex gap="XS" justifyContent="center" alignItems="center">
              <Text size="M" weight="500">
                ثبت‌نام نکرده‌ای؟
              </Text>
              <Link to="/register" color="brand" weight="800" size="M">
                ثبت نام
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </form>
    </Card>
  );
};

export default LoginForm;
