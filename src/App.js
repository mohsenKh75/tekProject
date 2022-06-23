import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes/index";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import "./styles/index.scss";

function App() {
  return (
    <div className="App h-100">
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.register} element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
