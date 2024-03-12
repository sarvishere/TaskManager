import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FieldError, useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../schemas";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import ErrorMessage from "../ErrorMessage";
import Flex from "../../ui/Flex";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Link from "../../ui/Link";
import Text from "../../ui/Text";
import axios from "axios";

type FormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: FormData) => {
    try {
      const status = await login(data);
      if (status === 200)
        toast.success(
          <Text weight="500" size="M">
            🎉 خوش آمدید
          </Text>
        );
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        toast.error(
          <Text weight="500" size="M">
            نام کاربری یا کلمه عبور اشتباه است
          </Text>
        );
      }
    }
  };

  return (
    <Card>
      <Heading align="center" className="mb-8" as="h2" size="L">
        به کوئرا تسک منیجر خوش برگشتی :)
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap={`${errors ? "XS" : "L"}`} direction="col">
          <Flex gap={`${errors ? "XS" : "M"}`} direction="col">
            <Input
              {...register("username")}
              className={getErrorStyles(errors.username)}
              id="username"
              label="نام کاربری"
            />
            <ErrorMessage error={errors.username} />

            <Flex direction="col">
              <Input
                {...register("password")}
                className={getErrorStyles(errors.password)}
                type="password"
                id="password"
                label="رمز عبور"
              />
              <ErrorMessage error={errors.password} />
              <Link to="/forgot-password" underline>
                رمز عبور خود را فراموش کرده‌اید؟
              </Link>
            </Flex>
          </Flex>
          <Flex className="" gap="M" direction="col">
            <Button
              disabled={isLoading}
              type="submit"
              color="brand"
              size="full"
            >
              {isLoading ? "در حال احراز هویت..." : "ورود"}
            </Button>
            <Flex gap="XS" justifyContent="center" alignItems="center">
              <Text size="M" weight="500">
                ثبت‌نام نکرده‌ای؟
              </Text>
              <Link to="/register" color="brand" weight="800" size="M">
                {"ثبت نام"}
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </form>
    </Card>
  );
};

const getErrorStyles = (error: FieldError | undefined) => {
  return error ? "border-red-600 border-2" : "";
};

export default LoginForm;
