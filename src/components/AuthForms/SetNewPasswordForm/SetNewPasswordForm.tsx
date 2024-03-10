import { FieldError, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";
import passwordResetSchema from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import ErrorMessage from "../ErrorMessage";
import Flex from "../../ui/Flex";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Text from "../../ui/Text";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

type FormData = z.infer<typeof passwordResetSchema>;

const SetNewPasswordForm: React.FC = () => {
  const { resetPassword, isLoading } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({ resolver: zodResolver(passwordResetSchema) });

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const passwordResetToken = queryParams.get("token");

  const onSubmit = async (data: FormData) => {
    try {
      if (passwordResetToken) {
        const response = await resetPassword(data, passwordResetToken);
        if (response.status === 200) {
          toast.success(
            <Text weight="500" size="M">
              رمز عبور با موفقیت تغییر کرد
            </Text>
          );
          navigate("/");
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        toast.error(
          <Text weight="500" size="M">
            {" "}
            لینک تغییر رمز عبور نامعتبر است
          </Text>
        );
        navigate("/forgot-password");
      }
    }
  };

  return (
    <Card>
      <Heading align="center" className="mb-8" as="h2" size="L">
        تغییر رمز عبور
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          gap={`${errors ? "XS" : "M"}`}
          direction="col"
          alignItems="center"
        >
          <Input
            {...register("password")}
            className={getErrorStyles(errors.password)}
            type="password"
            id="password"
            label="رمز عبور جدید را وارد کنید"
          />
          <ErrorMessage error={errors.password} />

          <Input
            {...register("password1")}
            className={getErrorStyles(errors.password1)}
            type="password"
            id="password1"
            label="تکرار رمز عبور"
          />
          <ErrorMessage error={errors.password1} />

          <Button disabled={isLoading} type="submit" color="brand" size="full">
            {isLoading ? "در حال تغییر رمز عبور" : "اعمال تغییرات"}
          </Button>
        </Flex>
      </form>
    </Card>
  );
};

const getErrorStyles = (error: FieldError | undefined) => {
  return error ? "border-red-600 border-2" : "";
};

export default SetNewPasswordForm;
