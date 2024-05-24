import React, { useState } from "react";
import Icon from "../../ui/Icon";

interface ThirdProps {
  isOpen: boolean;
  onSubmit: (workspaceName: string, workspaceColor: string) => void;
  buttonText: string;
  workspaceName: string;
  workspaceColor: string;
}

const Third: React.FC<ThirdProps> = ({
  isOpen,
  onSubmit,
  buttonText,
  workspaceName,
  workspaceColor,
}) => {
  const handleSubmit = () => {
    onSubmit(workspaceName, workspaceColor);
  };

  return (
    <div className={isOpen ? "modal" : "modal hidden"}>
      <div className="w-[500px] h-52 ">
        <div className="flex-col flex gap-[40px]">
          <div className=" mt-10 border border-gray-300 rounded p-2 ">
            <div className="flex  justify-evenly">
              <h2 className="mb-2 text-[14px] font-normal leading-5 text-right ">
                نام ورک‌اسپیس
              </h2>
              <h2> {workspaceName}</h2>
            </div>

            <div className="flex justify-evenly">
              <h2 className="mb-2 text-[14px] font-normal leading-5 text-right">
                رنگ ورک‌اسپیس
              </h2>
              <span
                className={`inline-block w-6 h-6 rounded-full ml-2 bg-${workspaceColor}-primary`}
              ></span>
            </div>

            {/* <h2 className="mb-2 text-[14px] font-normal leading-5 text-right">
              اعضا
            </h2> */}
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

export default Third;
