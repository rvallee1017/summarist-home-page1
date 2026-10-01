"use client";

import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "../../firebase";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

function LoginFormPage({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      onClose();
      router.push("/for-you");
    } catch {
      setError("Invalid email or password.");
    }
  };

  const handleGoogleLogin = async () => {
    setError("");

    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      onClose();
      router.push("/for-you");
    } catch {
      setError("Google login failed.");
    }
  };

  const handleGuestLogin = async () => {
    setError("");

    try {
      await signInWithEmailAndPassword(auth, "guest@summarist.com", "guest123");
      onClose();
      router.push("/for-you");
    } catch {
      setError("Guest login failed.");
    }
  };

  return (
    <div className="w-full z-9999 flex justify-center">
      <div className="relative w-full max-w-[400px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)]">
        <div className="pt-12 px-8 pb-6">
          <div className="text-center text-[20px] font-bold text-[#032b41] mb-6">
            Log in to Summarist
          </div>
          <button
            className="relative flex bg-[#3a579d] text-white w-full h-[40px] items-center justify-center"
            type="button"
            onClick={handleGuestLogin}
          >
            <figure className="bg-transparent flex items-center w-[36px] h-[36px] rounded-sm absolute left-2"></figure>
            <div>Login as a Guest</div>
          </button>
          <div className="flex items-center m-4 justify-center">
            <span className="m-[24px] text-sm text-[#394547] font-medium ">
              or
            </span>
          </div>
          <button
            className="relative flex bg-[#4285f4] text-white w-full h-[40px] items-center justify-center"
            type="button"
            onClick={handleGoogleLogin}
          >
            <figure className="flex items-center justify-center w-[36px] h-[36px] rounded-sm bg-white absolute left-0.5">
              <img className="w-6 h-6" src="/assets/google.png"></img>
            </figure>
            <div>Login with Google</div>
          </button>
          <div className="flex items-center m-[16px] justify-center">
            <span className="m-[24px] text-sm text-[#394547] font-medium">
              or
            </span>
          </div>
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <input
              className="h-[40px] border-2 border-[#bac8ce] rounded-sm p-3"
              placeholder="Email Address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></input>
            <input
              className="h-[40px] border-2 border-[#bac8ce] rounded-sm p-3"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            ></input>
            <button
              className="bg-[#2bd97c] text-[#032b41] w-full h-[40px] rounded-sm text-base transition-bg duration-200ms flex items-center justify-center min-w-[180px]"
              type="submit"
            >
              <span>Login</span>
            </button>
          </form>
        </div>
        <div className="text-center text-[#116be9] font-light text-sm w-fit m-auto cursor-pointer">
          Forgot your password?
        </div>
        <button className="h-[40px] text-center bg-[#f1f6f4] text-[#116be9] w-full rounded-r-sm rounded-l-sm font-light text-base">
          Don't have an account?
        </button>
        <button
          type="button"
          className="absolute top-3 right-3 cursor-pointer"
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default LoginFormPage;
