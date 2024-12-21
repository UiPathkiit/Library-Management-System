import React from "react";

const Footer = () => {
  return (
    <footer className="bg-transparent py-8 text-black font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-12 mb-8">
          <div className="flex flex-col gap-2 px-6">
            <h4 className="text-base font-bold mb-2">Features</h4>
            <a href="/" className="hover:text-blue-500 transition-colors">Growth</a>
            <a href="/" className="hover:text-blue-500 transition-colors">Sales</a>
            <a href="/" className="hover:text-blue-500 transition-colors">Chat</a>
          </div>
          <div className="flex flex-col gap-2 px-6">
            <h4 className="text-base font-bold mb-2">Pricing</h4>
            <a href="/" className="hover:text-blue-500 transition-colors">Free Trial</a>
            <a href="/" className="hover:text-blue-500 transition-colors">Standard</a>
            <a href="/" className="hover:text-blue-500 transition-colors">Business</a>
          </div>
          <div className="flex flex-col gap-2 px-6">
            <h4 className="text-base font-bold mb-2">Enterprise</h4>
            <a href="/" className="hover:text-blue-500 transition-colors">Personalize</a>
            <a href="/" className="hover:text-blue-500 transition-colors">Automation</a>
            <a href="/" className="hover:text-blue-500 transition-colors">Invoicing</a>
            <a href="/" className="hover:text-blue-500 transition-colors">24/7 Support</a>
          </div>
          <div className="flex flex-col gap-2 px-6">
            <h4 className="text-base font-bold mb-2">Careers</h4>
            <a href="/" className="hover:text-blue-500 transition-colors">Open Positions</a>
            <a href="/" className="hover:text-blue-500 transition-colors">Part-Time</a>
            <a href="/" className="hover:text-blue-500 transition-colors">Contractual</a>
            <a href="/" className="hover:text-blue-500 transition-colors">Contact Us</a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-center items-center mt-4 text-sm">
          <p>© Copyright 2024. Your Site. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
