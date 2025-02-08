"use client";
import { useState } from "react";
import Link from "next/link";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-wrap md:flex-nowrap h-screen w-full bg-[#CDF6FB]">
      <div className="w-full md:w-1/2 bg-purple-600 flex flex-col justify-center items-center p-6 md:p-10 text-white  md:rounded-r-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6">LIBRARY</h1>
        <p className="text-md md:text-lg mb-4 md:mb-6 text-center">
          Already have an account? Sign In now.
        </p>

        <Link href="/asignin" className="bg-black text-center text-white px-6 py-2 rounded-xl text-lg w-72 md:w-80 hover:opacity-80">
          SIGN IN
        </Link>
      </div>
      <div className="w-full md:w-1/2 bg-[#CDF6FB] flex flex-col justify-center items-center p-6 md:p-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-3 md:mb-4 font-sans">
          Sign Up
        </h2>
        <p className="text-gray-600 mb-6 md:mb-8 text-center">
          Please provide your information to sign up.
        </p>
                <div className="flex flex-col gap-3 w-full max-w-md">
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="First Name"
              className="w-full md:w-1/2 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full md:w-1/2 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Contact No"
              className="w-full md:w-1/2 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full md:w-1/2 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Username"
              className="w-full md:w-1/2 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full md:w-1/2 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <Link href="/asignin" className="bg-black mt-4 text-white px-6 py-2 text-center rounded-xl text-lg w-72 md:w-80 hover:opacity-80">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default AuthPage;
