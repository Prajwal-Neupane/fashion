import React from "react";
import SubNavbar from "./SubNavbar";
import { BsShop } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="max-w-[1640px] mx-auto">
      <SubNavbar />
      <div className="flex items-center justify-between md:px-16 px-9 lg:px-24 py-9">
        <div className="flex items-center gap-2 xl:gap-3">
          <BsShop
            style={{
              fontSize: "3rem",
            }}
            className=" p-3 text-white bg-[#FF1D1E] rounded-full  "
          />
          <h1 className="text-2xl text-gray-600 lg:text-3xl">
            <span className="font-semibold text-blue-950">Capital</span> Shop
          </h1>
        </div>
        <div className="hidden xl:flex">
          <ul className="flex md:gap-5 xl:gap-9 ">
            <li className="font-[600] text-gray-800 duration-300 hover:cursor-pointer hover:text-[#FF1D1E]">
              Home
            </li>
            <li className="font-[600] text-gray-800 duration-300 hover:cursor-pointer hover:text-[#FF1D1E]">
              Men
            </li>
            <li className="font-[600] text-gray-800 duration-300 hover:cursor-pointer hover:text-[#FF1D1E]">
              Women
            </li>
            <li className="relative font-[600] text-gray-800 duration-300 hover:cursor-pointer hover:text-[#FF1D1E]">
              Baby Collection
              <p className="absolute flex items-center justify-center w-4 h-4 p-3 px-4 text-white bg-[#FF1D1E] rounded-md -top-5 -right-5 text-[10px]">
                New
              </p>
            </li>
            <li className=" flex  items-center font-[600] text-gray-800 duration-300 hover:cursor-pointer hover:text-[#FF1D1E]">
              Pages <RiArrowDropDownLine size={30} />
            </li>
            <li className="font-[600] text-gray-800 duration-300 hover:cursor-pointer hover:text-[#FF1D1E]">
              Blog
            </li>
            <li className="font-[600] text-gray-800 duration-300 hover:cursor-pointer hover:text-[#FF1D1E]">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4 lg:gap-6">
          <BsSearch
            className="hover:text-[#FF1D1E] hover:cursor-pointer duration-300"
            style={{
              fontSize: "1.5rem",
            }}
          />
          <AiOutlineUser
            className="hover:text-[#FF1D1E] hover:cursor-pointer duration-300"
            style={{
              fontSize: "1.5rem",
            }}
          />
          <div className="relative">
            <AiOutlineShoppingCart
              className="hover:text-[#FF1D1E] hover:cursor-pointer duration-300"
              style={{
                fontSize: "1.5rem",
              }}
            />
            <motion.p
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="absolute flex items-center justify-center w-4 h-4 p-3 text-white bg-red-600 rounded-full -top-2.5 -right-2.5 hover:cursor-pointer"
            >
              1
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
