import React, { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const EmailVerified = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-lg text-gray-600">Verifying your email...</p>
        </div>
      ) : (
        <>
          <CheckCircle className="w-16 h-16 text-green-600 mb-4" />
          <h1 className="text-3xl font-bold mb-2">Email Verified</h1>
          <p className="text-lg text-gray-600 mb-6 text-center max-w-md">
            Your email has been successfully verified. You can now close this tab or return to the Sokhon Security website.
          </p>
          <Link
            to="/"
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Go to Homepage
          </Link>
        </>
      )}
    </div>
  );
};

export default EmailVerified;
