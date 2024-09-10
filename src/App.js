import HomeScreen from './screens/home/HomeScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route element={<HomeScreen />} path="/" />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
