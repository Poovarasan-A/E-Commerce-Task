import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { passwordReset } from "../api";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { isAuthenticated, error } = useSelector((state) => state.authState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      password,
      confirmPassword,
    };
    dispatch(passwordReset(formData, token));
  };

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Password reset successfully", {
        position: "top-center",
      });
      navigate("/");
      return;
    }
    if (error) {
      toast.error(error, {
        position: "top-center",
      });
      return;
    }
  }, [isAuthenticated, navigate, error]);
  return (
    <Fragment>
      <section className="fullscreen flex items-center justify-center bg-neutral-100/80">
        <div className="min-w-[30%] min-h-[50%] bg-white/90 shadow-md rounded-3xl py-6 px-10">
          <h2 className="font-bold text-2xl text-black pt-4 pb-8">
            Reset Password
          </h2>
          <form onSubmit={submitHandler} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 ">
              <label htmlFor="email">New Password</label>
              <input
                className="p-2 rounded-md bg-transparent border-2"
                id="password"
                type="password"
                placeholder="Enter New password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="cnfrmpassword">Confirm Password</label>
              <input
                className="p-2 rounded-md bg-transparent border-2"
                id="cnfrmpassword"
                type="password"
                placeholder="Enter Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="px-2 py-2.5 bg-violet-500 rounded-3xl text-white mt-4 hover:bg-violet-600"
            >
              Update Password
            </button>
          </form>
        </div>
      </section>
    </Fragment>
  );
};
export default ResetPassword;
