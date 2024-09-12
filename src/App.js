import HomeScreen from "./screens/home/HomeScreen";
import { BrowserRouter, Routes, Route, useLocation, matchPath } from "react-router-dom";
import Header from "./screens/header/Header";
import "./App.css";

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
      <div className="bodys">
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
      </Routes>
    </MainLayout>
    </BrowserRouter>
  );
}

export default App;
