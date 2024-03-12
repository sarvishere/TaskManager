import { useState } from "react";
import Icon from "../ui/Icon"
import  {InputInvite}  from "../Inputs/InputInvite/InputInvite";
import PermissionModal from "./PermissionModal";

interface IShareModal {
  onClose: (permissionId: number) => void;
  userPermission: number;
}

const ShareProjectModal = ({ onClose, userPermission }: IShareModal) => {
  const [isOpen, setOpen] = useState(true);
  const [isPermissionModalOpen, setPermissionModalOpen] = useState(false);
  const [selectedPermission, setSelectedPermission] = useState<number>(userPermission);

  const permissions = [
    "دسترسی کامل",
    "دسترسی ویرایش",
    "دسترسی کامنت",
    "دسترسی مشاهده",
  ];

  const handleClose = () => {
    onClose(selectedPermission);
    setOpen(false);
  };

  const handleClick = () => {
    setPermissionModalOpen(!isPermissionModalOpen);
  };

  const handleChange = (id: number) => {
    setSelectedPermission(id);
  };

  return (
    <>
      {isOpen && (
        <div   className="w-[470px] absolute top-1598px left-429px p-20 rounded-3xl bg-white drop-shadow-2xl share-project-modal gap-40">
          <div className="flex flex-col gap-m">
            <div className="w-full flex flex-row-reverse justify-start items-center mb-s gap-[80px]">
              <Icon iconName="Close" className="text-gray-darker cursor-pointer" onClick={handleClose} />
              <h3 className="font-iranyekan text-[24px]">به اشتراک گذاری پروژه</h3>
            </div>
            <InputInvite onClick={() => {}} />
            <div className="flex flex-row-reverse justify-between">
              <label className="flex flex-row gap-xs items-center">
                لینک خصوصی
                <Icon iconName="Link" />
              </label>
              <button className="px-[12px] pt-[2px] pb-[3px] border rounded-md">
                کپی لینک
              </button>
            </div>
            <div className="flex flex-col gap-xs">
              <span className="text-gray-primary text-right">
                اشتراک گذاشته شده با
              </span>
              <div className="grid grid-rows-2 gap-xs">
                <div className="flex flex-row-reverse items-center gap-xs">
                  <div className="bg-cover bg-center w-[34px] h-[37px] rounded-full" />
                  <label>
                    من
                  </label>
                  <span className="bg-blue-secondary rounded-md text-blue-primary py-[4px] px-[8px]">
                  مالک ورک‌اسپیس
                  </span>
                  <button className="px-[12px] pt-[2px] pb-[3px] border rounded-md mr-auto">
                    دسترسی کامل
                  </button>
                </div>
                <div className="flex flex-row-reverse items-center gap-xs">
                  <div className="bg-orange-primary w-[34px] h-[33px] rounded-full" />
                  <span className="px-[8px]">Sararahimi@mail.com</span>
                  <button
                    className="flex flex-row gap-xs items-center px-[12px] pt-[2px] pb-[3px] border rounded-md mr-auto"
                    onClick={handleClick}
                  >
                    {isPermissionModalOpen ? (
                      <Icon iconName="LeftArrow" />
                    ) : (
                      <Icon iconName="RightArrow" />
                    )}

                    {permissions[selectedPermission]}
                  </button>
                  {isPermissionModalOpen && (
                    <div className="fixed mr-[429px]">
                      <PermissionModal
                       onChange={(id: number) => {
                        handleChange(id);
                      }}
                        userPermission={userPermission}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShareProjectModal;