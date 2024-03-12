import { RouterProvider } from "react-router-dom";
import router from "./routes/route";
import NotificationPortal from "./components/Portals/NotificationPortal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <NotificationPortal>
        <ToastContainer />
      </NotificationPortal>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
