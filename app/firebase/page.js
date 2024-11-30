"use client"
import { useState } from "react";
import { auth, googleProvider } from "../firebase";
import {
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [verificationId, setVerificationId] = useState("");
  const router = useRouter();

  const initializeRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log("reCAPTCHA verified");
          },
        },
        auth
      );
    }
  };

  const handlePhoneLogin = async (e) => {
    e.preventDefault();
    initializeRecaptcha();
    const appVerifier = window.recaptchaVerifier;

    try {
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phone,
        appVerifier
      );
      setVerificationId(confirmationResult.verificationId);
      setShowOtpInput(true);
    } catch (error) {
      console.error("Error during phone login:", error.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    const credential = await auth.PhoneAuthProvider.credential(
      verificationId,
      otp
    );
    try {
      await auth.signInWithCredential(credential);
      router.push("/");
    } catch (error) {
      console.error("Error verifying OTP:", error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/");
    } catch (error) {
      console.error("Error during Google login:", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        {/* Google Login */}
        <button
          className="w-full p-2 bg-red-500 text-white rounded mb-4 hover:bg-red-600 transition"
          onClick={handleGoogleLogin}
        >
          Login with Google
        </button>

        {/* Phone Login */}
        <form onSubmit={showOtpInput ? verifyOtp : handlePhoneLogin}>
          {!showOtpInput && (
            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full p-2 border rounded mb-4"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          )}
          {showOtpInput && (
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full p-2 border rounded mb-4"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          )}
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            {showOtpInput ? "Verify OTP" : "Login with Phone"}
          </button>
        </form>
        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
}
