import { useState } from "react";
import Button from "../../components/ui/Button";

const SettingsPage: React.FC = (): JSX.Element => {
  const [selectedColor, setSelectedColor] = useState("");
  const handleColor = (color: string) => {
    setSelectedColor(color);
  };
  return (
    <div className="w-[354px] mt-[100px] mr-[58px]">
      <h2 className="text-[31px] font-extraBold mb-8">تنظیمات</h2>
      <h6>انتخاب تم</h6>
      <div className="flex w-[430px] items-center justify-between">
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
                ? "h-7 w-7 rounded-xl"
                : "min-h-5 min-w-5 m-[5px] rounded-lg"
            } rounded-lg bg-${color}-primary`}
            onClick={() => handleColor(color)}
          >
            {selectedColor === color && (
              <div className="w-3 h-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
            )}
          </button>
        ))}
      </div>
      <Button color="brand" size="full" className="mt-[40px]">
        ثبت تغییرات
      </Button>
    </div>
  );
};

export default SettingsPage;
