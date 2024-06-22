import { FieldError, useForm } from "react-hook-form";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountInfoSchema } from "../ProfileSchemas";
import ErrorMessage from "../ErrorMessage";
import useProfile from "../../../hooks/useProfile";
import useAuth from "../../../hooks/useAuth";
import useResetPassword from "../../../hooks/useResetPassword";
import { z } from "zod";

type FormData = z.infer<typeof accountInfoSchema>;

const AccountsInfoPage: React.FC = (): JSX.Element => {
  const { user } = useAuth();
  const userId = user && Number(user.id);
  const { updateProfile } = useProfile();
  const { resetPassword } = useResetPassword();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(accountInfoSchema) });

  const onSubmit = (data: FormData) => {
    const updatedProfileInfo = {
      email: data.email,
      username: data.username,
    };
    const updatedPassword = {
      old_password: data.old_password,
      new_password: data.new_password,
      new_password1: data.new_password1,
    };
    userId && updateProfile(userId, updatedProfileInfo);
    resetPassword(updatedPassword);
  };

  return (
    <form
      action=""
      className="w-[354px] mt-[100px] mr-[58px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-[31px] font-extraBold mb-8">اطلاعات حساب</h2>
      <Input label="ایمیل" {...register("email")} placeholder={user?.email} />
      <ErrorMessage error={errors.email as FieldError} />
      <Input
        label="نام کاربری"
        {...register("username")}
        placeholder={user?.username}
      />
      <ErrorMessage error={errors.username as FieldError} />
      <Input label="رمز عبور فعلی" {...register("old_password")} />
      <ErrorMessage error={errors.old_password as FieldError} />
      <Input label="رمز عبور جدید" {...register("new_password")} />
      <ErrorMessage error={errors.new_password as FieldError} />
      <Input label="تکرار رمز عبور جدید" {...register("new_password1")} />
      <ErrorMessage error={errors.new_password1 as FieldError} />
      <Button color="brand" size="full" className="mt-[40px]" type="submit">
        ثبت تغییرات
      </Button>
    </form>
  );
};

export default AccountsInfoPage;
