import { FaAngleDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

import { AiOutlineCheckCircle } from "react-icons/ai";
import React from "react";

const Header = () => {
  return (
    <div className="mx-36 px-36 mt-10">
      <h1 className="text-4xl text-slate-800 my-4">
        Best Website builders in the US
      </h1>
      <hr />
      <div className="flex py-3 text-gray-600 font-lighter justify-between">
        <div className="flex">
          <AiOutlineCheckCircle className="mt-1" />
          <p className="ml-1">Last Updated </p>
          <p> - February 22, 2020</p>
          <p className="ml-2">Advertising Disclosure</p>
        </div>
        <div className="flex">
          <p>Top Relevant</p>
          <FaAngleDown className="mt-1" />
        </div>
      </div>
      <hr />
      <ul className="flex justify-around my-4 w-4/5 text-slate-800">
        <li>Tools</li>
        <li>AWS Builder</li>
        <li>Start Build</li>
        <li>Build Supplies</li>
        <li>Tooling</li>
      </ul>

      <ul className="flex text-slate-800">
        <li>Home</li>
        <li className="mt-1.5 mx-3">
          <FaAngleRight />
        </li>
        <li>Hosting for all</li>
        <li className="mt-1.5 mx-3">
          <FaAngleRight />
        </li>

        <li>Hosting</li>
        <li className="mt-1.5 mx-3">
          <FaAngleRight />
        </li>

        <li>Hosting6</li>
        <li className="mt-1.5 mx-3">
          <FaAngleRight />
        </li>
        <li>Hosting5</li>
        <li className="mt-1.5 mx-3">
          <FaAngleRight />
        </li>
      </ul>
    </div>
  );
};

export default Header;
