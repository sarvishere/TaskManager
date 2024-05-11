import React, { useState } from "react";

interface FirstProps {
  isOpen: boolean;
  onSubmit: (workspaceName: string) => void;
  buttonText: string;
}

const First: React.FC<FirstProps> = ({ isOpen, onSubmit, buttonText }) => {
  const [workspaceName, setWorkspaceName] = useState("");

  const handleSubmit = () => {
    onSubmit(workspaceName);
    setWorkspaceName("");
  };

  return (
    <div className={isOpen ? "modal" : "modal hidden"}>
      <div className="w-[500px] h-52 ">
        <div className="flex-col flex gap-[40px]">
          <div className="mx-auto mt-10">
            <h2 className="mb-2 text-[14px] font-normal leading-5 text-right">
              نام ورک‌اسپیس
            </h2>

            <input
              className="w-[415px] h-[40ox] border border-gray-300 rounded-tl-6 focus:outline-none focus:border-gray-400 rounded-md "
              type="text"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="mx-auto w-[415px] h-[40ox] border border-gray-300 rounded-tl-6 focus:outline-none focus:border-gray-400 rounded-md bg-green-tertiary"
          >
            <h1 className="font-black text-gray-light">{buttonText}</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default First;
