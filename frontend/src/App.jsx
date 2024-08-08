import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
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
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </>
  );
};
export default App;
