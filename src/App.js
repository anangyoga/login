import "antd/dist/reset.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import ProfileLayout from "./layouts/ProfileLayout";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<HomeLayout />}></Route>
            <Route path="/profile" element={<ProfileLayout />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
