import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/login";
import Register from './pages/register';
import Forgot from './pages/forgot';
import Task from "./pages/task";
import ProfileInfo from "./pages/profiles/info";
import ProfileAccount from "./pages/profiles/account";
import ProfileSetting from "./pages/profiles/profilesetting";
import Board from "./pages/boards/board";
import Test from "./pages/test";

function App() {
  return (
    <>
      <h1 className="font-iranyekan font-heavy text-text-indigo-primary dark:text-cyan-primary">
        سلام بچه های بهترین گروه بوتکمپ کوئرا
      </h1>

      <main>
        <Routes>
          <Route path="/task" element={<Test />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/task" element={<Task />} />

          <Route path="/profile" element={<ProfileInfo />}>
            <Route path="account" element={<ProfileAccount />} />
            <Route path="setting" element={<ProfileSetting />} />
          </Route>

          <Route path="/board" element={<Board />} />



        </Routes>
      </main>
    </>
  );
}

export default App;
