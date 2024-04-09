import React, {useContext} from 'react';
import Icon from '../ui/Icon';
import { BoardContext } from '../../layout/Board';

interface TaskNavProps {
  onButtonClick: (buttonType: string) => void;
  activeButton: string;
  projectName: string;
}

const TaskNav: React.FC<TaskNavProps> = ({ onButtonClick, activeButton  }) => {

  const {projectNameState} = useContext(BoardContext);

  const handleButtonClick = (buttonType: string) => {
    onButtonClick(buttonType);
  };

  const isButtonActive = (buttonType: string): string => {
    return activeButton === buttonType ? 'active-button' : '';
  };

  return (
    <div dir="rtl" className="font-iranyekan flex border-b-[0.5px] border-[#AAAAAA] justify-between w-[1033px] h-[64px] pt-[16px] pb-[16px] mt-[41px] mr-[16px]">
      <div className="flex">
        <div className="border-l-[0.5px] border-[#AAAAAA] pr-[16px] pl-[16px]">
          <h1 className="font-black text-[20px] "> {projectNameState} </h1>
        </div>

        <div className="border-l-[0.5px] border-[#AAAAAA] pr-[16px] pl-[16px] ">
          <button className={isButtonActive('listview')} onClick={() => handleButtonClick('listview')}>
            <div className='flex gap-[5px]'>
            <Icon iconName="ListView" />
            <h1 className="font-medium text-[16px]">نمایش لیستی</h1>
            </div>
          </button>
        </div>

        <div className="border-l-[0.5px] border-[#AAAAAA] pr-[16px] pl-[16px] ">
          <button className={isButtonActive('columnview')} onClick={() => handleButtonClick('columnview')} >
            <div className='flex  gap-[5px]'>
            <Icon iconName="ColumnView" />
            <h1 className="font-medium text-[16px]">نمایش ستونی</h1>
            </div>
          </button>
        </div>

        <div className="border-l-[0.5px] border-[#AAAAAA] pr-[16px] pl-[16px] flex gap-[5px] ">
          <button className={isButtonActive('calendar')} onClick={() => handleButtonClick('calendar')}>
          <div className='flex gap-[5px]'>
            <Icon iconName="Calendar" />
            <h1 className="font-medium text-[16px]">تقویم</h1>
            </div>
          </button>
        </div>
      </div>

      <div className="pr-[16px] pl-[16px] flex gap-[5px]">
        <Icon iconName="Share" />
        <h1 className="font-medium text-[16px] "> اشتراک گذاری </h1>
      </div>
    </div>
  );
};

export default TaskNav;
