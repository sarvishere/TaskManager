import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import Flex from "../../ui/Flex";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Link from "../../ui/Link";
import ErrorMessage from "../ErrorMessage";
import { passwordResetSchema } from "../schemas";
import { FieldError, useForm } from "react-hook-form";
import { z } from "zod";

type FormData = z.infer<typeof passwordResetSchema>;

const RegisterForm = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<FormData>({ resolver: zodResolver(passwordResetSchema) });

  const onSubmit = (data: FormData) => {};

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

          <Button
            disabled={isSubmitting}
            type="submit"
            color="brand"
            size="full"
          >
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

const getErrorStyles = (error: FieldError | undefined) => {
  return error ? "border-red-600 border-2" : "";
};

export default RegisterForm;
