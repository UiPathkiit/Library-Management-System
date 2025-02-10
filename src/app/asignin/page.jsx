"use client";
import { useState } from "react";
import Link from "next/link";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-wrap md:flex-nowrap h-screen w-full bg-[#CDF6FB]">
      {/* Left - Login Section */}
      <div className="w-full md:w-1/2 bg-[#CDF6FB] flex flex-col justify-center items-center p-6 md:p-10">
        <h2 className="text-3xl md:text-5xl font-semibold mb-3 md:mb-4 font-sans">
          Welcome Back !!
        </h2>
        <p className="text-gray-600 mb-6 md:mb-8 text-center md:text-left">
          Please enter your credentials to log in
        </p>

        <input
          type="text"
          placeholder="Username"
          className="w-72 md:w-80 p-2 mb-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-72 md:w-80 p-2 mb-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <Link href="/aforget" className="text-sm text-gray-600 mb-4 hover:underline">
          Forgot password?
        </Link>
<Link href="/LandingPage" className="text-sm text-gray-600 mb-4 hover:underline">
        <button className="bg-black text-white px-6 py-2 rounded-xl text-lg w-64 md:w-80 hover:opacity-80">
          SIGN IN
        </button>
  </Link>
      </div>

      {/* Right - Signup Section */}
      <div className="w-full md:w-1/2 bg-purple-600 flex flex-col justify-center items-center p-6 md:p-10 text-white  md:rounded-l-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6">LIBRARY</h1>
        <p className="text-md md:text-lg mb-4 md:mb-6 text-center">
          New to our platform? Sign Up now.
        </p>

        <Link href="/asignup" className="bg-black text-center text-white px-6 py-2 rounded-xl text-lg w-64 md:w-80 hover:opacity-80">
          SIGN UP
        </Link>
      </div>
    </div>
  );
};

export default AuthPage;
