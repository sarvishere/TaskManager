import { useState } from "react";

interface IPermission {
  onChange: (id: number) => void;
  userPermission: number;
}

const PermissionModal = ({ onChange, userPermission }: IPermission) => {
  const initialState = Array(4).fill(false);
  initialState[userPermission] = true;
  const [checked, setChecked] = useState(initialState);

  const handleSelect = (id: number) => {
    const arr = Array(4).fill(false);
    arr[id] = true;
    setChecked(arr);
    onChange(id);
  };

  return (
    <div className="w-[252px] p-[16px] flex flex-col rounded-lg gap-s bg-white shadow">
      <label className="border-b-2 py-[10px]">
        <span className="font-iranyeakan block text-right text-[14px] h-[17px] leading-6">
          دسترسی کامل
        </span>
        <span className="block text-right text-[12px] leading-6">
          توانایی ساختن تسک در این پروژه، ویرایش تنظیمات پروژه و حذف پروژه
        </span>
        <input
          id="0"
          type="radio"
          className="hidden w-full h-full"
          checked={checked[0]}
          onChange={() => {
            handleSelect(0);
          }}
        />
      </label>
      <label className="border-b-2 py-[10px]">
        <span className="font-iranyeakan block text-right text-[14px] h-[25px] leading-6">
          دسترسی ویرایش
        </span>
        <span className="block text-right text-[12px] leading-6">
          توانایی ویرایش تسک در این پروژه و ویرایش تنظیمات پروژه. نمی تواند
          پروژه را حذف یا تسک جدید بسازد.
        </span>
        <input
          id="1"
          type="radio"
          className="hidden w-full h-full"
          checked={checked[1]}
          onChange={() => {
            handleSelect(1);
          }}
        />
      </label>
      <label className="border-b-2 py-[10px]">
        <span className="font-iranyeakan block text-right text-[14px] h-[25px] leading-6">
          دسترسی کامنت
        </span>
        <span className="block text-right text-[12px] leading-6">
          توانایی کامنت گذاشتن دارد. می تواند ستون تسک ها را تغییر دهد اما
          توانایی ویرایش تنظیمات پروژه را ندارد.
        </span>
        <input
          id="2"
          type="radio"
          className="hidden w-full h-full"
          checked={checked[2]}
          onChange={() => {
            handleSelect(2);
          }}
        />
      </label>
      <label className="py-[10px]">
        <span className="font-iranyeakan block text-right text-[14px] h-[25px] leading-5">
          فقط دسترسی مشاهده
        </span>
        <span className="block text-right text-[12px] leading-5 h-[50px]">
          توانایی گذاشتن کامنت یا ویرایش تسک ها را ندارد.
        </span>
        <input
          id="3"
          type="radio"
          className="hidden w-full h-full"
          checked={checked[3]}
          onChange={() => {
            handleSelect(3);
          }}
        />
      </label>
    </div>
  );
};
export default PermissionModal;