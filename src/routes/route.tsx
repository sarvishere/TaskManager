import { createBrowserRouter } from "react-router-dom";
import AuthenticationLayout from "../layout/AuthenticationLayout";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoutes from "./PrivateRoutes";
import UsersPage from "../pages/UsersPage";
import ProfileLayout from "../layout/ProfileLayout";
import PersonalInfoPage from "../pages/ProfilePages/PersonalInfoPage";
import AccountsInfoPage from "../pages/ProfilePages/AccountInfoPage";
import Board from "../layout/Board";
import TaskboardListView from "../components/TaskboardListView/TaskboardListView";
import TaskboardColumnView from "../components/TaskboardColumnView/TaskboardColumnView";
import Calendar from "../components/calendar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthenticationLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      { path: "users", element: <UsersPage /> },
      {
        path: ":workspaceId/:projectId",
        element: <Board />,
        children: [
          {
            path: "columnview",
            element: <TaskboardColumnView boards={[]} setBoards={undefined} />,
          },
          {
            path: "listview",
            element: <TaskboardListView boards={[]} />,
          },
          {
            path: "calendar",
            element: <Calendar boards={[]} />,
          },
        ],
      },
      {
        path: "profile",
        element: <ProfileLayout />,
        children: [
          { index: true, element: <PersonalInfoPage /> },
          { path: "accountinfo", element: <AccountsInfoPage /> },
        ],
      },
    ],
  },
]);

export default router;
