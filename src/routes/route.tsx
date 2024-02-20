import { createBrowserRouter } from "react-router-dom";
import Test from "../pages/test";
import AuthenticationLayout from "../layout/AuthenticationLayout";


const router = createBrowserRouter([
    {
        path : "/",
        element: <AuthenticationLayout />
    },
    {
        path: "/register",
        element: <AuthenticationLayout />
    },
    {
        path :'/test',
        element: <Test/>
    },
]);

export default router;

