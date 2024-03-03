import { CiSearch } from "react-icons/ci";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="bg-slate-900 p-4 flex justify-between sm:justify-center  pl-20">
      <div className="flex bg-white rounded-md">
        <CiSearch className="mt-2 text-lg ml-1" />
        <input type="text" className="rounded-md py-1  sm:w-1/3 " />
      </div>
      <ul className="hidden sm:flex text-gray-200  gap-x-2 sm:mt-2 text-sm ml-12">
        <li>Categories</li>
        <li>Website Builders</li>
        <li className="ml-6">Today&apos;s deals</li>
      </ul>
      <RxHamburgerMenu className="sm:hidden text-2xl mt-1 text-white float-right flex-end" />
    </div>
  );
};

export default Navbar;
