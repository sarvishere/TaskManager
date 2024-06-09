import React, { useState } from "react";

interface SecondProps {
  isOpen: boolean;
  onSubmit: (color: string) => void;
  buttonText: string;
}

const Second: React.FC<SecondProps> = ({ isOpen, onSubmit, buttonText }) => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleSubmit = () => {
    onSubmit(selectedColor);
    setSelectedColor("");
  };

  return (
    <div className={isOpen ? "modal" : "modal hidden"}>
      <div className="w-[500px] h-52">
        <div className="flex-col flex gap-[40px]">
          <div className="flex mr-10">
            <div className="flex flex-col flex-wrap">
              <h2 className="mb-2 text-[14px] font-normal leading-5 text-right">
                رنگ ورک‌اسپیس
              </h2>
              <div>
                {[
                  "red",
                  "pink",
                  "grape",
                  "violet",
                  "indigo",
                  "blue",
                  "cyan",
                  "teal",
                  "brand",
                  "green",
                  "lime",
                  "yellow",
                  "orange",
                ].map((color, index) => (
                  <button
                    key={index}
                    className={`relative ${
                      color === selectedColor
                        ? "h-7 w-7 rounded-3xl"
                        : "min-h-5 min-w-5 m-[5px] rounded-lg"
                    } rounded-lg bg-${color}-primary`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {selectedColor === color && (
                      <div className="w-3 h-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
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

export default Second;
