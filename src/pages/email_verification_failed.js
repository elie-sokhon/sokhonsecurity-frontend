import React from "react";
import { XCircle } from "lucide-react";
import { Link } from "react-router-dom";

const EmailVerificationFailed = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <XCircle className="w-16 h-16 text-red-600 mb-4" />
      <h1 className="text-3xl font-bold mb-2">Email Verification Failed</h1>
      <p className="text-lg text-gray-600 mb-6 text-center max-w-md">
        The verification link is invalid or has expired. Please try again or request a new one.
      </p>
      <Link
        to="/login"
        className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition"
      >
        Return to Login
      </Link>
    </div>
  );
};

export default EmailVerificationFailed;
