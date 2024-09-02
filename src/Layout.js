import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import User from "./Components/User/User";
import Admin from "./Components/Admin/Admin";
import HomePage from "./Components/Home/HomePage";
import ManageUser from "./Components/Admin/Content/ManageUser";
import DashBoard from "./Components/Admin/Content/DashBoard";
import Login from "./Components/Auth/Login";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./Components/Auth/Register";

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="User" element={<User />} />
        </Route>
        <Route path="/Admin" element={<Admin />}>
          <Route index element={<DashBoard />} />
          <Route path="manage-users" element={<ManageUser />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Layout;
