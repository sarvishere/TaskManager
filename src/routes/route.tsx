import { createBrowserRouter } from "react-router-dom";
import Test from "../pages/test";
import AuthenticationLayout from "../layout/AuthenticationLayout";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import PasswordResetPage from "../pages/PasswordResetPage";
import PrivateRoutes from "./PrivateRoutes";
import UsersPage from "../pages/UsersPage";
import ResetPage from "../pages/ResetPage/ResetPage";
import { BoardPage } from "../pages/BoardPage/BoardPage";

import ProfileLayout from "../layout/ProfileLayout";
import PersonalInfoPage from "../pages/ProfilePages/PersonalInfoPage";
import AccountsInfoPage from "../pages/ProfilePages/AccountInfoPage";
import SettingsPage from "../pages/ProfilePages/SettingsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthenticationLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "forgot-password", element: <PasswordResetPage /> },
      {
        path: "reset-password",
        element: <ResetPage />,
      },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      { path: "users", element: <UsersPage /> },
      { path: "board", element: <BoardPage /> },
      {
        path: "profile",
        element: <ProfileLayout />,
        children: [
          { index:true, element: <PersonalInfoPage /> },
          { path: "accountinfo", element: <AccountsInfoPage /> },
          { path: "settings", element: <SettingsPage /> },
        ],
      },
    ],
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

export default router;
