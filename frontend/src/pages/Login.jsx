import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Oauth from "../components/Oauth";
import { loginUser } from "../API/api";
import { clearLoginErr } from "../redux/slices/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, user, error, isAuthenticated } = useSelector(
    (state) => state.userState
  );

  const loginHandler = (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (isAuthenticated) {
      toast.success(`welcome ${user.name}! `);
      navigate("/");
      return;
    }
    if (error) {
      toast.error(error);
      dispatch(clearLoginErr());
    }
  }, [isAuthenticated, error, user, navigate, dispatch]);

  return (
    <section className="fullscreen flex items-center justify-center bg-neutral-100/80">
      <div className="min-w-[30%] min-h-[60%] bg-white/90 shadow-md rounded-3xl py-6 px-10">
        <h2 className="font-bold text-2xl text-black pt-4 pb-8">
          Welcome to Ykart
        </h2>
        <form onSubmit={loginHandler} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 ">
            <label htmlFor="email">Email</label>
            <input
              className="p-2 rounded-md bg-transparent border-2"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              className="p-2 rounded-md bg-transparent border-2"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`px-2 py-3 ${
              loading ? "bg-neutral-200" : "bg-violet-500"
            } rounded-3xl text-white mt-4 hover:bg-violet-600`}
          >
            Login
          </button>
          <p>
            <Link to="/forgot/password" className="text-blue-600">
              Forgot Password?
            </Link>
          </p>
          <p>
            New user?
            <Link to="/register" className="text-blue-600">
              &nbsp;Signup
            </Link>
          </p>
          <p className="text-center">
            -------------------- or --------------------
          </p>
          <Oauth />
        </form>
      </div>
    </section>
  );
};
export default Login;
