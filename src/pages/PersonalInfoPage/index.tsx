import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

const PersonalInfoPage: React.FC = (): JSX.Element => {
  return (
    <form action="" className="w-[354px] mt-[100px] mr-[58px]">
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
        <Input label="نام" />
        <Input label="نام خانوادگی" />
        <Input label="شماره موبایل" />
        <Button color="brand" size="full" className="mt-[40px]">
          ثبت تغییرات
        </Button>
      </div>
    </form>
  );
};

export default PersonalInfoPage;
