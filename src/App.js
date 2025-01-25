import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomeScreen from "./screens/home/HomeScreen";
import Header from "./screens/header/Header";
import Search from "./pages/searchSocical/Search";
import Friends from "./pages/friends/FriendShip";

import NotFound from "./pages/notfound/NotFound";
import "./App.css";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";

function App() {
  const MainLayout = ({ children }) => {
    const location = useLocation();

    // Khai báo các route không cần header (ví dụ: sản phẩm, không cần header và footer)
    const excludeRoutes = ["/login", "/signup", "/forgot-password"];

    // Kiểm tra xem route hiện tại có thuộc loại cần bỏ qua header/footer không
    const isExist = excludeRoutes.includes(location.pathname);

    // Nếu có, chỉ render children mà không có header
    if (isExist) {
      return <>{children}</>;
    }

    // Nếu không có yêu cầu đặc biệt, render children với header
    return (
      <div className="">
        <Header /> 
        {children}
      </div>
    );
  };

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          {/* Trang Home không yêu cầu bảo vệ, luôn có Header */}
          <Route path="/" element={<HomeScreen />} />
          <Route path="/search" element={<Search />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/notification" element ={<div>Notification</div>} />
          <Route path="/friend-ships" element={<Friends />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/search/:keySearch" element={<Search />} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
