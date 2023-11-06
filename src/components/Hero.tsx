import React from "react";
import { Carousel } from "flowbite-react";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="w-full h-screen">
      <div className="py-4 text-center text-white bg-gray-900">
        <p>
          Save Up To 50% Biggest Discounts. Hurry! Limited Period Offer{" "}
          <motion.span
            whileHover={{ letterSpacing: "2px" }}
            className="text-gray-400 underline cursor-pointer"
          >
            Shop Now
          </motion.span>
        </p>
      </div>
      <Carousel>
        <div className="relative">
          <img
            src="https://plus.unsplash.com/premium_photo-1682096261732-88a83f8bb20b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-screen "
            alt=""
          />
          <div className="absolute flex flex-col gap-2 items-center justify-center w-[50%] text-center top-[40%] left-[5%]">
            <h1 className="text-[#FF1D1E] text-5xl dancing  text-center">
              Fashion Sale
            </h1>
            <motion.h1
              animate={{ opacity: 1, display: "block" }}
              initial={{ opacity: 0, display: "none" }}
              transition={{ duration: 2, type: "spring" }}
              className="text-5xl text-center "
            >
              Minimal Menz Style
            </motion.h1>
            <p className="w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              fugiat quidem sunt, nemo unde at in debitis est minima aliquid.
            </p>

            <button className="py-4 mt-5 text-white duration-200 bg-black px-9 hover:bg-white hover:text-black hover:border-2 hover:border-black">
              SHOP NOW
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=60&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <div className="absolute flex flex-col gap-2 items-center justify-center w-[50%] text-center top-[40%] right-[5%]">
            <h1 className="text-[#FF1D1E] text-5xl dancing  text-center">
              Fashion Sale
            </h1>
            <h1 className="text-5xl text-center ">Minimal Menz Style</h1>
            <p className="w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              fugiat quidem sunt, nemo unde at in debitis est minima aliquid.
            </p>

            <button className="py-4 mt-5 text-white duration-200 bg-black px-9 hover:bg-white hover:text-black hover:border-2 hover:border-black">
              SHOP NOW
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
