import React from "react";
import ReactDOM from "react-dom";

const NotificationPortal: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById("toast-root")!
  );
};

export default NotificationPortal;
