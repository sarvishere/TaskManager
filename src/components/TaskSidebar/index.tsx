import React from 'react';
import Icon from '../ui/Icon';



const TaskSidebar: React.FC = () => {
  return (
  <div dir="rtl" className='flex flex-col w-[340px] h-[1024px] border-l-[0.5px] border-[#AAAAAA] '>

    <div className='w-[235] h-[45px] mt-[40px] flex pr-[50px]'>
      <h1 style={{ backgroundImage: 'linear-gradient(to right, #118C80, #4AB7D8)', WebkitBackgroundClip: 'text', color: 'transparent' }} className="text-lh font-iranyekan font-black">
        کوئرا تسک منیجر
      </h1>
    </div>

    <div className='w-[274px] mt-[37px] pr-[50px]'>

      <div className='flex justify-between'>
        <p className="font-black text-base font-iranyekan "> ورک اسپیس‌ها</p>
        <Icon iconName="ChevronDown" />
      </div>

      <div className="relative w-[274px] h-[40px] mt-[16px]">
  <input
    className=" w-full h-full bg-gray-secondary pr-9 rounded-[5px] font-iranyekan"
    placeholder=" جستجو کنید" 
    />
  <button className="absolute top-1/2 transform -translate-y-1/2 right-3 " type="button">
    <Icon iconName="Search" />
  </button>
</div>
     

<div className='flex bg-[#D3D3D3] h-[32px] rounded-[6px] justify-center items-center mt-[16px] w-[274px]'>
<Icon iconName="SquarePlus" />
  <h3 className='font-iranyekan font-normal text-[12px] '> ساختن ورک‌اسپیس جدید</h3>
</div>



<button className="relative w-[274px] h-[36px] rounded-lg border-[2px] border-brand-primary text-brand-primary flex justify-center items-center font-IRANYekanWeb font-normal text-[14px] leading-5 text-center px-4 mt-[14px] ">
ساختن پروژه جدید
</button>
    </div>


    <div className=' w-[276px] h-[85px] flex flex-col pr-[32px]  mt-auto'>
    <h1> name </h1>
    <div className='flex' >
    <Icon iconName="SquarePlus" />
    <Icon iconName="LightMode" />
    </div>
    </div>


  </div>

  );
};

export default TaskSidebar;
