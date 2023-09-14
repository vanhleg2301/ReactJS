// rafce
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaFreeCodeCamp } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#00aaff]">Logo</h1>
      <ul
        className="hidden md:flex text-sm font-bold"
        style={{ whiteSpace: "nowrap" }}
      >
        <li className="p-4">Giai phap tron goi</li>
        <li className="p-4">Dich vu - San pham</li>
        <li className="p-4">Kien thuc & Bao cao</li>
        <li className="p-4">Du an dien hinh</li>
        <li className="p-4">Gioi thieu</li>
        <li className="p-4">Tuyen dung</li>
        <button className="py-4 px-6 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg flex items-center">
          Start free trial <FaFreeCodeCamp className="ml-2" />
        </button>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed top-0 left-0 h-full w-[40%] border-r-gray-900 bg-slate-700 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00aaff]">Navbar</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Giai phap tron goi</li>
          <li className="p-4 border-b border-gray-600">Dich vu - San pham</li>
          <li className="p-4 border-b border-gray-600">Kien thuc & Bao cao</li>
          <li className="p-4 border-b border-gray-600">Du an dien hinh</li>
          <li className="p-4 border-b border-gray-600">Gioi thieu</li>
          <li className="p-4 border-b border-gray-600">Tuyen dung</li>
          <li className="p-4 border-b">Start free trial</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
