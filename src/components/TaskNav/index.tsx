import Icon from '../ui/Icon';


const TaskNav = () => {
  return (
      <div dir="rtl" className=' font-iranyekan flex  border-b-[0.5px] border-[#AAAAAA] justify-between w-[1034px] h-[64px] pt-[16px] pb-[16px] mt-[41px] mr-[16px]'>

      <div className='flex '>

        <div className = "border-l-[0.5px] border-[#AAAAAA] pr-[16px] pl-[16px]" > 
        <h1 className='font-black text-[20px] '> پروژه اول </h1>
        </div>

        <div className = "border-l-[0.5px] border-[#AAAAAA] pr-[16px] pl-[16px] flex gap-[5px]" > 
        <Icon iconName="ListView" />
        <h1 className='font-medium text-[16px] '>  نمایش لیستی</h1>
        </div>

        <div className = "border-l-[0.5px] border-[#AAAAAA] pr-[16px] pl-[16px] flex gap-[5px] " > 
        <Icon iconName="ColumnView" />
        <h1 className='font-medium text-[16px] '>  نمایش ستونی</h1>
        </div>


        <div className = "border-l-[0.5px] border-[#AAAAAA] pr-[16px] pl-[16px] flex gap-[5px] " > 
        <Icon iconName="Calendar" />
        <h1 className='font-medium text-[16px] '> تقویم </h1>
        </div>

      </div>

      <div className='pr-[16px] pl-[16px] flex gap-[5px] flex'>
      <Icon iconName="Share" />
        <h1 className='font-medium text-[16px] '> اشتراک گذاری </h1>
      </div>


    </div>

  )
}

export default TaskNav;