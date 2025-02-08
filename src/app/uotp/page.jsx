'use client';
import Image from 'next/image';
import Link from "next/link";

export default function AuthPage() {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-full bg-[#E4FBFF]">
      {/* Left Section (Form) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-10 relative">
        <Link
          href="/asignin"
          className="absolute top-5 left-5 bg-white border border-gray-300 px-3 py-1 text-sm rounded-lg hover:bg-gray-200"
        >
          BACK
        </Link>
        <div className="bg-[#E6F9E6] p-6 lg:p-10 rounded-2xl border-[#ACD3BE] border-4 shadow-lg w-full max-w-md">
          <h2 className="text-2xl lg:text-3xl tracking-wide font-semibold text-center mb-4">Check your Mailbox</h2>
          <p className="text-center text-gray-600 mb-6">
            Please enter the OTP to proceed
          </p>
          <input
            type="text"
            placeholder="OTP"
            className="w-full p-3 rounded-lg border mb-4 focus:outline-none"
          />
          <Link href="/usrest" className="w-full bg-black text-white p-3 rounded-2xl font-bold hover:opacity-90 text-center block">
            VERIFY
          </Link>
        </div>
      </div>

      {/* Right Section (Image and Text) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center relative bg-cover bg-center min-h-[50vh] lg:min-h-screen">
        <Image 
          src="/assets/userlib.jpg" 
          alt="Library Books" 
          layout="fill" 
          objectFit="cover" 
          className="absolute inset-0 lg:rounded-l-3xl"
        />
        <div className="absolute inset-0"></div>
        <div className="relative p-6 lg:p-10 bg-[#DDF5E4] border-[#ACD3BE] flex gap-3 flex-col border-4 rounded-2xl shadow-lg text-center mx-4 lg:mx-0">
          <h2 className="text-2xl lg:text-3xl font-bold">LIBRARY</h2>
          <p className="text-gray-600 my-4 lg:w-44">"Your premier digital library for borrowing and reading books"</p>
        </div>
      </div>
    </div>
  );
}