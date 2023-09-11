import React from "react";
import Typed from "typed.js";

const Hero = () => {
  return (
    <div className="">
      <div className="max-w-[60%] mt-[-96px] w-full h-screen text-center flex flex-col justify-center">
        <h1 className="text-[#4BADED] w-50 md:text-5xl sm:text-4xl text-4xl font-bold md:py-4">
          Nâng tầm Quản trị Thương hiệu cùng Big Data, AI & Machine Learning
        </h1>
        <div className="text-[#4BADED] md:text-2xl border border-blue-400 border-solid font-bold mt-5">
          <button>Tim hieu them</button>
        </div>
      </div>
      <div className="max-w-[40%]">
        <img
          src="../assets/img/610a14b6fb64d612212dcf36_bach-xa-2-1.jpg"
          alt="Hình ảnh"
        />
      </div>
      <div className="flex justify-center text-center">
        <p>Vanh Vanh He161142 - </p>
        <Typed
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
          }}
          strings={["Music", "code", "play hard"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </div>
    </div>
  );
};

export default Hero;
