import { useForm } from "react-hook-form";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import { personalInfoSchema } from "../ProfileSchemas";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "../ErrorMessage";
import useAuth from "../../../hooks/useAuth";
import useProfile from "../../../hooks/useProfile";
import { useEffect } from "react";

type FormData = z.infer<typeof personalInfoSchema>;

const PersonalInfoPage: React.FC = (): JSX.Element => {
  const { user } = useAuth();
  const userId = user && Number(user.user_id);
  const { updateProfile, getProfile, profileData } = useProfile();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(personalInfoSchema) });

  useEffect(() => {
    getProfile(userId);
  }, []);

  const onSubmit = (formData: FormData) => {
    const { first_name, last_name, phone_number, thumbnail } = formData;
    const imageFile = thumbnail[0];
    updateProfile(userId, { first_name, last_name, phone_number, imageFile });
  };

  return (
    <form
      action=""
      className="w-[354px] mt-[100px] mr-[58px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-[31px] p-1 font-extraBold">اطلاعات فردی</h2>
      <div className="flex-col">
        <Input label="نام" {...register("first_name")} />
        <ErrorMessage error={errors.first_name} />
        <Input label="نام خانوادگی" {...register("last_name")} />
        <ErrorMessage error={errors.last_name} />
        <Input label="شماره موبایل" {...register("phone_number")} />
        <ErrorMessage error={errors.phone_number} />
        <Button color="brand" size="full" className="mt-[40px]" type="submit">
          ثبت تغییرات
        </Button>
      </div>
    </form>
  );
};

export default PersonalInfoPage;
