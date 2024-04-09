import React from 'react';
import Icon from '../ui/Icon';
import Button from '../ui/Button';

interface CreateTaskModalProps {
  onClose: () => void;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className='w-[184px] h-[204px] rounded-lg bg-white justify-center flex flex-col items-center'style={{ boxShadow: '0px 4px 16px 0px #00000029' }}>
      <button onClick={handleClose}>
        <Icon iconName="Close" className='w-[24px] stroke-[#C8C8C8]' />
      </button>

     <div >
        <div className='flex '>
          <Icon iconName="Add" />
          <p> ساخت تسک جدید </p>
        </div>

        <div className='flex mt-2'>
          <Icon iconName="Edit" />
          <p> ویرایش نام پروژه</p>
        </div>

        <div className='flex mt-2'>
          <Icon iconName="Link" />
          <p>  کپی لینک</p>
        </div>

        <div className='flex mt-2'>
          <Icon iconName="Remove" />
          <p> حذف</p>
        </div>
        </div>
      <div>

      <div className='flex mt-2'>
      <button type="submit" className="submit-button w-[160px] h-[36px] rounded bg-[#208D8E] flex items-center justify-center">
        <Icon iconName="Share" />
        <p className="ml-1"> اشتراک گذاری</p>
      </button>  
    </div>

      </div>
    </div>
  );
};

export default CreateTaskModal;
