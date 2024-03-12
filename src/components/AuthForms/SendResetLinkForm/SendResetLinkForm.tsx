import { sendResetLinkSchema } from "../schemas";
import { FieldError, useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import Flex from "../../ui/Flex";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Link from "../../ui/Link";
import Text from "../../ui/Text";
import ErrorMessage from "../ErrorMessage";

type FormData = z.infer<typeof sendResetLinkSchema>;

const SendResetLinkForm: React.FC = () => {
  const { sendResetLink, isLoading } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({ resolver: zodResolver(sendResetLinkSchema) });
  const onSubmit = async (data: FormData) => {
    try {
      const response = await sendResetLink(data);
      if (response.status === 200) {
        toast.success(
          <Text weight="500" size="M">
            ایمیل بازیابی با موفقیت ارسال شد
          </Text>
        );
        navigate(`/reset-password/?${response.data.url.split("?")[1]}`);
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 400)
        toast.error(
          <Text weight="500" size="M">
            کاربری با ایمیل وارد شده پیدا نشد
          </Text>
        );
    }
  };

  return (
    <Card>
      <Heading align="center" className="mb-8" as="h2" size="L">
        فراموشی رمز عبور
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          gap={`${errors ? "XS" : "M"}`}
          direction="col"
          alignItems="center"
        >
          <Input
            {...register("email")}
            className={getErrorStyles(errors.email)}
            type="email"
            id="email"
            label="ایمیل خود را وارد کنید"
          />
          <ErrorMessage error={errors.email} />

          <Button disabled={isLoading} type="submit" color="brand" size="full">
            {isLoading
              ? "لطفاً منتظر بمانید..."
              : "دریافت ایمیل بازیابی رمز عبور"}
          </Button>
          <Link color="brand" to="/" size="M" weight="800">
            بازگشت
          </Link>
        </Flex>
      </form>
    </Card>
  );
};

const getErrorStyles = (error: FieldError | undefined) => {
  return error ? "border-red-600 border-2" : "";
};

export default SendResetLinkForm;
