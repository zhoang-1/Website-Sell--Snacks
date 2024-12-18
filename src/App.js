import HomeScreen from "./screens/home/HomeScreen";
import { BrowserRouter, Routes, Route, useLocation, matchPath } from "react-router-dom";
import Header from "./screens/header/Header";
import Search from "./pages/searchSocical/Search";
import "./App.css";
import Friends from "./pages/Friends";
import SidebarLeft from "./screens/home/SidebarLeft";

function App() {
  const MainLayout = ({ children }) => {

    //url path của trang web
    const location = useLocation();

    //khai báo url path không xài header footer
    const excludeRoutes = ['/products/:id'];

    // kiểm tra bằng vòng lặp
    const isExist = excludeRoutes.some((routes) => {
      // trả về liệu có tồn tại location nào khớp với phần tử url nào trong excludeRoutes hay không
      return matchPath({path: routes, exact: true}, location.pathname)
    })

    // nếu có thì trả về children không xài header và footer
    if (isExist) {
      return <>{children}</>;
    }

    //nếu không thì trả về children xài cùng header và footer
    return (
      <div className="">
        <Header />
        {children}
      </div>
    );

  }
  return (
    <BrowserRouter>
    <MainLayout>
      <Routes>
        <Route element={<HomeScreen />} path="/" />
        <Route element={<Friends />} path="/friend" />
        <Route path="/search/:keySearch" element={<Search />} />
      </Routes>
    </MainLayout>
    </BrowserRouter>
  );
}

export default App;
