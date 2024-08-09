import { FcGoogle } from "react-icons/fc";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { googleNewUser } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Oauth = () => {
  const { isAuthenticated, error } = useSelector((state) => state.userState);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth(app);

  const handleGoogleAuth = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      console.log(resultsFromGoogle);
      const formData = {
        name: resultsFromGoogle.user.displayName,
        email: resultsFromGoogle.user.email,
        // images: results.user.photoURL,

        images: [
          {
            url: resultsFromGoogle.user.photoURL,
            filename: ``,
          },
        ],
      };
      dispatch(googleNewUser(formData));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      toast.success(`Welcome ${name}!`, {
        position: "top-center",
      });
      navigate("/");
    }
    if (error) {
      toast.error(error, {
        position: "top-center",
      });
    }
  }, [isAuthenticated, error, navigate]);

  return (
    <div className="w-full">
      <button
        onClick={handleGoogleAuth}
        className="px-2 w-full py-2.5 border-2 rounded-3xl my-2 flex items-center justify-center gap-4"
      >
        <FcGoogle className="text-xl" />
        Continue with Google
      </button>
    </div>
  );
};
export default Oauth;
