import "antd/dist/reset.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import ProfileLayout from "./layouts/ProfileLayout";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />}></Route>
          <Route path="/profile" element={<ProfileLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
