import React, { useState } from 'react';
import Icon from "../ui/Icon";

interface TitleFormProps {
  onTitleSubmit: (title: string) => void;
  onClose: () => void;
}

const TitleForm: React.FC<TitleFormProps> = ({ onTitleSubmit, onClose }) => {
  const [title, setTitle] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onTitleSubmit(title);
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  const currentDate= new Date();
  const day= currentDate.getDate();
  const month = currentDate.toLocaleString('fa', { month: 'long' })


  return (
    <div className='w-[463px] h-[150px] relative bg-white p-[20px] rounded-[8px] border border-[#208D8E]'> 
    <form className="" onSubmit={handleSubmit}>
        <div className='flex w-[423px] '> 
        <button onClick={handleClose} >
        <Icon iconName="Close" className='w-[24px] stroke-[#C8C8C8]' />
        </button>

        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder='نام تسک را وارد کنید'
          className='font-iranyekan'
        />
    </div>

    <div className='flex justify-between items-center mt-[32px] w-[423px] '>
      <div className='flex '>

    <Icon iconName="Flag" className="w-7 h-7 stroke-[#C1C1C1] align-middle ml-[7px]"/>

    <p className='font-iranyekan font-medium text-[20px]  text-[#208D8E]'> {`${day} ${month}`}</p>
</div>
      <button type="submit" className="submit-button w-[125px] h-[32px] rounded bg-[#208D8E] px-[4px]">
       <p className='font-iranyekan font-normal text-[12px]  text-[#FFFFFF]'> ساختن تسک </p>
      </button>
</div>

    </form>
    </div>
  );
};

export default TitleForm;
