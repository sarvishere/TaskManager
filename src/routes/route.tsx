import { createBrowserRouter } from "react-router-dom";
import Test from "../pages/test";
import AuthenticationLayout from "../layout/AuthenticationLayout";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import PasswordResetPage from "../pages/PasswordResetPage";
import PrivateRoutes from "./PrivateRoutes";
import UsersPage from "../pages/UsersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthenticationLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "forgot-password", element: <PasswordResetPage /> },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [{ path: "users", element: <UsersPage /> }],
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

export default router;
