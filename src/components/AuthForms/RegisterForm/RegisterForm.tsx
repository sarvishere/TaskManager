import { useState } from "react";
import { FieldError, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import CheckBox from "../../ui/CheckBox";
import Flex from "../../ui/Flex";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Text from "../../ui/Text";
import { TermsModal } from "../../TermsModal";

type FormData = z.infer<typeof registrationSchema>;

export const validationErrors = {
  username: "نام کاربری باید حداقل ۳ کاراکتر داشته باشد.",
  email: "لطفاً یک ایمیل معتبر وارد کنید.",
  password: "رمز عبور باید حداقل ۸ کاراکتر داشته باشد.",
  termsAndConditions: "برای ثبت‌نام، قوانین را باید بپذیرید.",
};

export const registrationSchema = z.object({
  username: z.string().min(3, { message: validationErrors.username }),
  email: z.string().email({ message: validationErrors.email }),
  password: z.string().min(8, { message: validationErrors.password }),
  termsAndCondition: z.boolean().refine((value) => value === true, {
    message: validationErrors.termsAndConditions,
  }),
});

export const loginSchema = registrationSchema.omit({
  email: true,
  termsAndCondition: true,
});

const RegisterForm = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<FormData>({ resolver: zodResolver(registrationSchema) });

  const onSubmit = (data: FormData) => {};

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap={`${errors ? "S" : "M"}`} direction="col">
          <Input
            className={getErrorStyles(errors.username)}
            {...register("username")}
            id="username"
            label="نام کاربری"
          />
          <ErrorMessage error={errors.username} />

          <Input
            className={getErrorStyles(errors.email)}
            {...register("email")}
            type="email"
            id="email"
            label="ایمیل"
          />
          <ErrorMessage error={errors.email} />

          <Input
            className={getErrorStyles(errors.password)}
            {...register("password")}
            type="password"
            id="password"
            label="رمز عبور"
          />
          <ErrorMessage error={errors.password} />

          <CheckBox
            {...register("termsAndCondition", { required: true })}
            className={getErrorStyles(errors.termsAndCondition)}
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
          <ErrorMessage error={errors.termsAndCondition} />

          <TermsModal visible={showModal} onClose={handleCloseModal} />
          <Button
            disabled={isSubmitting}
            type="submit"
            color="brand"
            size="full"
          >
            ثبت‌نام
          </Button>
        </Flex>
      </form>
    </Card>
  );
};

const getErrorStyles = (error: FieldError | undefined) => {
  return error ? "border-red-600 border-2" : "";
};

const ErrorMessage: React.FC<{
  error: FieldError | undefined;
}> = ({ error }) => {
  if (error) {
    return (
      <Text color="red" size="S">
        {error.message}
      </Text>
    );
  }
  return null;
};

export default RegisterForm;
