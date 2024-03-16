import React from "react";

interface AvatarGroupProps {
  children: React.ReactNode;
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ children }) => {
  return <div className="flex -space-x-4 rtl:space-x-reverse">{children}</div>;
};

export default AvatarGroup;
