import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import HeadNav from "./components/HeadNav";
import Register from "./screens/auth/Register";
import Login from "./screens/auth/Login";

import "./App.css";
import "./bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeadNav />
        <Routes>
          <Route path="/" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
