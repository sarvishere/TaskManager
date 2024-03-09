import Icon from "../../components/ui/Icon";

const ProfileLayout:React.FC=():JSX.Element=>{
return(
    <nav className="w-[340px] h-screen pr-[50px] pt-[40px] border-l-[0.5px] border-[#AAAAAA] flex-col font-iranyekan font-medium text-xl">
    <h1 className="logo h-[45px] flex items-center">کوئرا تسک منیجر</h1>
    
      <button className="w-[113px] h-[36px] flex items-center justify-between pt-1 pr-2 pb-1 pl-2 rounded-lg mt-[85px] font-medium text-xl bg-brand-primary text-white">
        <Icon iconName="RightArrow" />
        بازگشت
      </button>

      <div className="flex flex-col h-[176px] justify-between mt-[43px]">
        <a href="" className="font-medium flex"><Icon iconName="UserEdit" className="ml-[11px]" />اطلاعات فردی</a>
        <a href="" className="font-medium flex"><Icon iconName="UserTick" className="ml-[11px]" />اطلاعات حساب</a>
        <a href="" className="font-medium flex"><Icon iconName="Settings" className="ml-[11px]" />تنظیمات</a>
      </div>
  </nav>
)
}

export default ProfileLayout;