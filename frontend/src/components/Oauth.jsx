import { FcGoogle } from "react-icons/fc";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";

const Oauth = () => {
  const auth = getAuth(app);

  const handleGoogleAuth = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      console.log(resultsFromGoogle);
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
