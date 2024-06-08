import { Link, Outlet } from "react-router-dom";
import Icon from "../../components/ui/Icon";
import { useState } from "react";

const ProfileLayout: React.FC = (): JSX.Element => {
  const [activeStage, setActiveStage] = useState("personalInfo");
  const handleChangeStage = (stage: string) => {
    setActiveStage(stage);
  };

  return (
    <div className="flex font-iranyekan">
      <nav className="w-[340px] h-screen pr-[50px] pt-[40px] border-l-[0.5px] border-[#AAAAAA] flex-col font-iranyekan font-medium text-xl">
        <h1 className="logo h-[45px] flex items-center">کوئرا تسک منیجر</h1>

        <button className="w-[113px] h-[36px] flex items-center justify-between pt-1 pr-2 pb-1 pl-2 rounded-lg mt-[85px] font-medium text-xl bg-brand-primary text-white">
          <Icon iconName="RightArrow" />
          <Link to="/board">بازگشت</Link>
        </button>
        <div className="flex flex-col h-[176px] w-[266px] justify-between mt-[43px]">
          <Link
            to="/profile/"
            className={`flex items-center h-[40px] pt-1 pr-2 pb-1 pl-2 ${
              activeStage === "personalInfo" && "bg-brand-secondary font-black"
            }`}
            onClick={() => handleChangeStage("personalInfo")}
          >
            {" "}
            <Icon iconName="UserEdit" className="ml-[11px]" />
            اطلاعات فردی
          </Link>
          <Link
            to="/profile/accountinfo"
            className={`flex items-center h-[40px] pt-1 pr-2 pb-1 pl-2 ${
              activeStage === "accountInfo" && "bg-brand-secondary font-black"
            }`}
            onClick={() => handleChangeStage("accountInfo")}
          >
            {" "}
            <Icon iconName="UserEdit" className="ml-[11px]" />
            اطلاعات حساب
          </Link>
          <Link
            to="/profile/settings"
            className={`flex items-center h-[40px] pt-1 pr-2 pb-1 pl-2 ${
              activeStage === "settings" && "bg-brand-secondary font-black"
            }`}
            onClick={() => handleChangeStage("settings")}
          >
            {" "}
            <Icon iconName="UserEdit" className="ml-[11px]" />
            تنظیمات
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default ProfileLayout;
