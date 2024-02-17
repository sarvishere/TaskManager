import { createBrowserRouter } from "react-router-dom";
import Test from "../pages/test";

const router = createBrowserRouter([
    {
        path : "/",
        element: <h1> login </h1>
    },
    {
        path :'/test',
        element: <Test/>
    },
]);

export default router;