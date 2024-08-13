import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerNewUser } from "../API/api";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Oauth from "../components/Oauth";
import { clearLoginErr } from "../redux/slices/userSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.userState
  );

  const registerHandler = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      password,
    };
    dispatch(registerNewUser(formData));
  };

  useEffect(() => {
    if (isAuthenticated) {
      toast.success(`welcome ${name}! `);
      navigate("/");
      return;
    }
    if (error) {
      toast.error(error);
      dispatch(clearLoginErr());
    }
  }, [isAuthenticated, navigate, error, name, dispatch]);

  return (
    <section className="fullscreen flex items-center justify-center bg-neutral-100/80">
      <div className="min-w-[30%] min-h-[70%] bg-white/90 shadow-md rounded-3xl py-6 px-10">
        <h2 className="font-bold text-2xl text-black pt-4 pb-8">
          Welcome to Ykart
        </h2>
        <form onSubmit={registerHandler} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              className="p-2 rounded-md bg-transparent border-2"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
            SignUp
          </button>
          <p>
            Have an account?
            <Link to="/login" className="text-blue-600">
              &nbsp;Login
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
export default Register;
