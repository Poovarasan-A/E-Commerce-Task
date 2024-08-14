import { Fragment, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { passwordReset } from "../API/api";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { isAuthenticated, error } = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useParams();

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      newPassword,
      confirmPassword,
    };
    dispatch(passwordReset(formData, token));
  };

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Password reset successfully");
      navigate("/login");
      return;
    }
    if (error) {
      toast.error(error);
      return;
    }
  }, [isAuthenticated, error, navigate]);
  return (
    <Fragment>
      <section className="fullscreen flex items-center justify-center bg-neutral-100/80">
        <div className="min-w-[30%] min-h-[50%] bg-white/90 shadow-md rounded-3xl py-6 px-10">
          <h2 className="font-bold text-2xl text-black pt-4 pb-4">
            Reset Password
          </h2>
          <form onSubmit={submitHandler} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 ">
              <label htmlFor="newpassword">New Password</label>
              <input
                className="p-2 rounded-md bg-transparent border-2"
                id="newpassword"
                type="password"
                placeholder="Enter your email"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="cnfrmpassword">Confirm Password</label>
              <input
                className="p-2 rounded-md bg-transparent border-2"
                id="cnfrmpassword"
                type="password"
                placeholder="Enter your email"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="px-2 py-3 bg-violet-500 rounded-3xl text-white mt-4 hover:bg-violet-600"
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
