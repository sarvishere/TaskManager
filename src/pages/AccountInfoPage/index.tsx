import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

const AccountsInfoPage: React.FC = (): JSX.Element => {
  return (
    <form action="" className="w-[354px] mt-[100px] mr-[58px]">
      <h2 className="text-[31px] font-extraBold mb-8">اطلاعات حساب</h2>
      <Input label="ایمیل" />
      <Input label="نام کاربری" />
      <Input label="رمز عبور فعلی" />
      <Input label="رمز عبور جدید" />
      <Input label="تکرار رمز عبور جدید" />
      <Button color="brand" size="full" className="mt-[40px]">
        ثبت تغییرات
      </Button>
    </form>
  );
};

export default AccountsInfoPage;
