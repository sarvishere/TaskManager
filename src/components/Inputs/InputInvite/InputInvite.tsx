import React, { useState } from 'react';

interface IInputInviteProps {
  onClick: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputInvite = ({
  onChange,
  onClick,
}: IInputInviteProps) => {
  const [email, setEmail] = useState('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="flex flex-row w-full items-center">
      <button
        type="submit"
        onClick={onClick}
        className="bg-brand-primary w-1/4 h-[40px] rounded-tl-md rounded-bl-md text-white duration-200 active:bg-gray-primary"
      >
        ارسال
      </button>
      <input
        id="emailInvite"
        type="email"
        value={email}
        onChange={handleOnChange}
        placeholder=" دعوت با ایمیل "
        className="bg-gray-secondary rounded-tr-md rounded-br-md p-xs my-xs w-full h-[40px] text-right"
      />
    </div>
  );
}