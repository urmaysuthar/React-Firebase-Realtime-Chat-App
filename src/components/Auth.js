import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";

export const Auth = () =>{
    const signInWithGoogle = async () => {
        await signInWithPopup(auth, provider);
    };

    return (
    <div className="auth">
        <p> Sign in with Google to continue</p>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
    );
};
