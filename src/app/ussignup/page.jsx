'use client';
import Image from 'next/image';
import Link from "next/link";

export default function AuthPage() {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-full bg-[#E4FBFF]">
      <div className="w-full lg:w-1/2 flex items-center justify-center relative bg-cover bg-center min-h-[50vh] lg:min-h-screen">
        <Image 
          src="/assets/userlib.jpg" 
          alt="Library Books" 
          layout="fill" 
          objectFit="cover" 
          className="absolute inset-0 lg:rounded-r-3xl"
        />
        <div className="absolute inset-0"></div>
        <div className="relative p-6 lg:p-10 bg-[#DDF5E4] border-[#ACD3BE] flex gap-3 flex-col border-4 rounded-2xl shadow-lg text-center mx-4 lg:mx-0">
          <h2 className="text-2xl lg:text-3xl font-bold">LIBRARY</h2>
          <p className="text-gray-600 my-4">Already have Account? Sign In now.</p>
          <Link href="/usignin" className="bg-black text-white px-6 py-3 rounded-2xl font-bold hover:opacity-90">
            SIGN IN
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-10">
        <div className="bg-[#E6F9E6] p-6 lg:p-10 rounded-2xl border-[#ACD3BE] border-4 shadow-lg w-full max-w-sm">
          <h2 className="text-2xl lg:text-3xl tracking-wide font-semibold text-center mb-4">Sign Up</h2>
          <p className="text-center text-gray-600 mb-6">
            Please provide information to sign up.
          </p>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 rounded-lg border mb-4 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Email"
            className="w-full p-3 rounded-lg border mb-4 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg border mb-2 focus:outline-none"
          />
          <button className="w-full bg-black text-white p-3 mt-3 rounded-2xl font-bold hover:opacity-90">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
}