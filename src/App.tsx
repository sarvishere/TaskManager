import { RouterProvider } from "react-router-dom";
import router from "./routes/route";


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
