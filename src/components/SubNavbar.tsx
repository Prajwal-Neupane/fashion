import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const SubNavbar = () => {
  return (
    <div className="max-w-[1640px] mx-auto md:flex hidden justify-between px-16 py-3 border-b-2 border-gray-400 ">
      <div className="">
        <ul className="flex text-gray-600 gap-9 text-[14px]">
          <li>About Us</li>
          <li>Privacy</li>
          <li>FAQ</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="flex items-center justify-between ">
        <div className="px-5 text-gray-600 border-r-2 border-gray-400 text-[14px]">
          <p>My Whitelist</p>
        </div>
        <div className="px-5 text-gray-600 border-r-2 border-gray-400 text-[14px] ">
          <p>Track Your Order</p>
        </div>
        <div className="flex justify-between gap-5 px-5 text-gray-600">
          <FaFacebook className="hover:cursor-pointer hover:scale-x-[-1] duration-300 hover:text-red-700" />
          <FaInstagram className="hover:cursor-pointer hover:scale-x-[-1] duration-300 hover:text-red-700" />
          <FaTwitter className="hover:cursor-pointer hover:scale-x-[-1] duration-300 hover:text-red-700" />
          <FaLinkedin className="hover:cursor-pointer hover:scale-x-[-1] duration-300 hover:text-red-700" />
          <FaYoutube className="hover:cursor-pointer hover:scale-x-[-1] duration-300 hover:text-red-700" />
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
