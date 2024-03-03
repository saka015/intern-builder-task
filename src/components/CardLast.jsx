import React from "react";
import { FaStarHalf } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import pc from "../assets/pc.png";

const CardLast = (props) => {
  return (
    <div className="flex justify-between bg-white rounded-md my-6 p-3">
      <div className="flex-2">
        <span className="bg-white px-3 py-2 absolute -mt-4 -ml-6 rounded-full">
          {props.num}
        </span>
        <img width="150" src={pc} alt="" />
      </div>
      <div className="w-2/4 break-all">
        <p>
          <b> {props.desc}</b> - Comprehensive Digital Platform Creation Tool,
          Streamlined Design Interface for Professional Websites and Online
          Stores (Black/Blue)
          <br />
          <b> Main highlights</b>
          <div className="p-2 gap-y-2 ml-2 rounded-md bg-orange-100">
            <p className="my-1"><span className="mx-2 bg-white p-1 text-blue-500">9.9</span>Building Responsive</p>
            <p className="my-1"><span className="mx-2 bg-white p-1 text-blue-500">8.9</span>Cool</p>
            <p className="my-1"><span className="mx-2 bg-white p-1 text-blue-500">9.9</span>Docs</p>
                  </div> <br />
          <span className="text-blue-400"> Show more</span>
        </p>
      </div>
      <div className=" justify-center p-2 flex-2">
        <div className="mx-4 bg-slate-100 grid p-4 rounded-md items-center justify-center">
          <h1 className="text-3xl text-center">{props.rating}</h1>
          <p>{props.word}</p>
          <div className="flex">
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStarHalf className="text-yellow-300" />
          </div>
        </div>
        <button className="flex-end w-full my-4 bg-blue-400 rounded-md text-white p-2 text-center">
          View
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default CardLast;
