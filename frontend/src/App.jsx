import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Header from "./components/Header";
const Home = lazy(() => import("./pages/Home"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));

const App = () => {
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden">
        <Router>
          <Toaster
            toastOptions={{ style: { background: "#363636", color: "#fff" } }}
          />
          <Suspense fallback={<Loader />}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot/password" element={<ForgotPassword />} />
              <Route
                path="/reset/password/:token"
                element={<ResetPassword />}
              />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </>
  );
};
export default App;
