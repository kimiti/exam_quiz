import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeadNav from "./components/HeadNav";
import LandingPage from "./screens/LandingPage";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import DashBoard from "./screens/dashboard/DashBoard";

import "./App.css";
import "./bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeadNav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
