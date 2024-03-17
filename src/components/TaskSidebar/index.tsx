import React from 'react';
import Icon from '../ui/Icon';
import useAuth from '../../hooks/useAuth';
import WorkspacesList from './workspaces';


const getFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase();
};

const TaskSidebar: React.FC = () => {
  const {user , logout} = useAuth();

  return (
  <div dir="rtl" className='flex flex-col w-[340px] h-[999px] border-l-[0.5px] border-[#AAAAAA] pr-12 font-iranyekan'>

    <div className=' mt-10 flex '>
      <h1 style={{ backgroundImage: 'linear-gradient(to right, #118C80, #4AB7D8)', WebkitBackgroundClip: 'text', color: 'transparent' }} className="text-lh font-iranyekan font-black">
        کوئرا تسک منیجر
      </h1>
    </div>
    <div className='w-[274px]'> 

    <div className=' mt-[37px] '>
      <div className='flex justify-between'>
        <p className="font-black text-base  "> ورک اسپیس‌ها</p>
        <Icon iconName="ChevronDown" />
      </div>

      <div className="relative w-full h-[40px] mt-[16px]">
  <input
    className=" w-full h-full bg-gray-secondary pr-9 rounded-[5px]"
    placeholder=" جستجو کنید" 
    />
  <button className="absolute top-1/2 transform -translate-y-1/2 right-3 " type="button">
    <Icon iconName="Search" />
  </button>
</div>
     

<div className='flex bg-[#D3D3D3] h-[32px] rounded-[6px] justify-center items-center mt-[16px] w-[274px]'>
<Icon iconName="SquarePlus" />
  <h3 className='font-iranyekan font-normal text-[12px] '>  مایا ساختن ورک‌اسپیس جدید</h3>
</div>

<WorkspacesList />

<button className="relative w-[274px] h-[36px] rounded-lg border-[2px] border-brand-primary text-brand-primary flex justify-center items-center font-normal text-[14px] leading-5 text-center px-4 mt-[14px] ">
ساختن پروژه جدید
</button>
    </div>
    </div>

    <div className=' flex flex-col p-12  mt-auto'>
    {user && ( 
      <div className='flex items-center gap-2'>
    <div className="w-[36px] h-[36px] flex justify-center items-center bg-gray-secondary rounded-full mr-[8px]">
              <span className="text-white font-bold font-iranyekan">
              {user.first_name && getFirstLetter(user.first_name)}
                {user.last_name && getFirstLetter(user.last_name)}
                </span>
            </div>
     <h1>{user.username}</h1>
     
    </div>
    )}
    <div className='flex  text-[#818181] mt-4'>
    <Icon iconName='Logout'/>
      <button onClick={() => logout()}> خروج </button>
      
    </div>
    </div>


  </div>

  );
};

export default TaskSidebar;
