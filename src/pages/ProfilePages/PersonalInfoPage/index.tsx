import { useForm } from "react-hook-form";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import { personalInfoSchema } from "../ProfileSchemas";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "../ErrorMessage";
import useAuth from "../../../hooks/useAuth";
import useProfile from "../../../hooks/useProfile";

type FormData = z.infer<typeof personalInfoSchema>;

const PersonalInfoPage: React.FC = (): JSX.Element => {
  const { user } = useAuth();
  const { updateProfile } = useProfile(user?.user_id);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(personalInfoSchema) });

  const onSubmit = (formData: FormData) => {
    const { first_name, last_name, phone_number } = formData;
    updateProfile(user?.user_id, { first_name, last_name, phone_number });
  };
  return (
    <form action="" className="w-[354px] mt-[100px] mr-[58px]" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-[31px] font-extraBold">اطلاعات فردی</h2>
      <div className="flex-col">
        <div className="mb-8 mt-8 flex items-center">
          <div className="h-[100px] w-[100px] ml-4 rounded-full bg-yellow-secondary flex justify-center items-center text-yellow-primary text-4xl">
            NM
          </div>
          <div>
            <button className="w-[212px] p-[10px] text-xl font-medium border border-brand-primary rounded-lg text-brand-primary ">
              ویرایش تصویر پروفایل
            </button>
            <p className="text-xs font-normal text-[#8A8989] mt-4">
              این تصویر برای عموم قابل نمایش است.
            </p>
          </div>
        </div>
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
