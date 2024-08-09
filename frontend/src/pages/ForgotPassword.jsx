import { Fragment, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { message, error } = useSelector((state) => state.userState);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      email,
    };
    dispatch(forgotPassword(formData));
  };

  useEffect(() => {
    if (message) {
      toast.success("Email sent Successfully", {
        position: "top-center",
      });
      setEmail("");
      return;
    }
    if (error) {
      toast.error(error, {
        position: "top-center",
      });
      return;
    }
  }, [message, error]);
  return (
    <Fragment>
      <section className="fullscreen flex items-center justify-center bg-neutral-100/80">
        <div className="min-w-[30%] min-h-[50%] bg-white/90 shadow-md rounded-3xl py-6 px-10">
          <h2 className="font-bold text-2xl text-black pt-4 pb-4">
            Forgot Password
          </h2>
          <p className="py-4 text-neutral-400">
            Enter registered email to reset your password{" "}
          </p>
          <form onSubmit={submitHandler} className="flex flex-col gap-4">
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
            <button
              type="submit"
              className="px-2 py-3 bg-violet-500 rounded-3xl text-white mt-4 hover:bg-violet-600"
            >
              send Email
            </button>
          </form>
        </div>
      </section>
    </Fragment>
  );
};
export default ForgotPassword;
