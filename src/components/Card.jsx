import React from "react";
import { FaStar } from "react-icons/fa";
import pc from "../assets/pc.png";

const Card = (props) => {
  return (
    <div className="sm:flex justify-between bg-white rounded-md my-6 p-3">
      <div className="flex-1 mb-4 sm:mb-0 sm:mr-4">
        <span className="bg-white px-3 py-2 absolute -mt-4 -ml-6 rounded-full">
          {props.num}
        </span>
        <img className="w-full" src={pc} alt="" />
      </div>
      <div className="flex-1 sm:w-2/4 break-all">
        <p>
          <b>{props.desc}</b> - Comprehensive Digital Platform Creation Tool,
          Streamlined Design Interface for Professional Websites and Online
          Stores (Black/Blue)
          <br />
          <b>Main highlights</b>
          [What You Get]: Receive the WixPro website builder suite, access to
          premium design templates, an extensive library of widgets and apps,
          and detailed step-by-step guides. <br />
          <span className="text-blue-400">Show more</span>
        </p>
      </div>
      <div className="flex-1 sm:flex-none justify-center p-2">
        <div className="mx-4 bg-slate-100 grid p-4 rounded-md items-center justify-center">
          <h1 className="text-3xl text-center">{props.rating}</h1>
          <p>{props.word}</p>
          <div className="flex">
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
          </div>
        </div>
        <button className="w-full my-4 bg-blue-400 rounded-md text-white p-2 text-center">
          View
        </button>
      </div>
    </div>
  );
};

export default Card;
