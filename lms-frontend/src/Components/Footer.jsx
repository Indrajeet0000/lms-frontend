import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full bottom-0 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-900 py-4 px-6">
      <p className="text-sm">
        © {new Date().getFullYear()} LMS Project — All Rights Reserved
      </p>

      <div className="flex gap-4 mt-2 sm:mt-0">
        <a href="#" className="text-xl hover:text-blue-400">
          <BsFacebook />
        </a>
        <a href="#" className="text-xl hover:text-pink-400">
          <BsInstagram />
        </a>
        <a href="#" className="text-xl hover:text-blue-600">
          <BsLinkedin />
        </a>
        <a href="#" className="text-xl hover:text-sky-400">
          <BsTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
