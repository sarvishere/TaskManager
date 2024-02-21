import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const isAuthenticated = true;
  if (!isAuthenticated) return <Navigate to={"/"} />;

  return <Outlet />;
};

export default PrivateRoutes;
