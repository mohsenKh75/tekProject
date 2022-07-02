import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes/allRoutes";
import "swiper/css/bundle";
import Login from "./pages/login/loginForm";
import Register from "./pages/register/registerForm";
import MainPage from './pages/main/MainPage'
import PasswordField from "./pages/passwordField/passwordField";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import 'boxicons'
import "./styles/index.scss";


function App() {


  return (

    <div className="App h-100">
      <RecoilRoot>
        <Routes>
          <Route path={ROUTES.home} element={<MainPage />} />
          <Route path={ROUTES.login} element={<Login />} />
          <Route path={ROUTES.register} element={<Register />} />
          <Route path={ROUTES.passwordField} element={<PasswordField />} />
          <Route path={ROUTES.mainpage} element={<MainPage />} />
        </Routes>
      </RecoilRoot>

    </div>


  );
}

export default App;
