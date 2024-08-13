import { FcGoogle } from "react-icons/fc";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { googleNewUser } from "../API/api";
import { useDispatch } from "react-redux";

const Oauth = () => {
  const dispatch = useDispatch();
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
