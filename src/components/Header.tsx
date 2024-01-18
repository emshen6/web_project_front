import React from "react";
import logo from "../img/logo_color.svg";
import { BiCartAlt } from "react-icons/bi";
import { BiListUl } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";

export const Header = (): JSX.Element => {
  return (
    <div className="flex justify-between items-center p-5">
      <div>
        <img src={logo} alt="Logo" className="h-100" />
      </div>

      <div className="inline-flex items-center space-x-10">
        <div className="inline-flex items-right relative">
          <div className="inline-flex items-center gap-[40px] relative">
            <div className="relative w-[252px] h-[40px] rounded-[20px] border border-solid border-gray" />
            <div className="inline-flex items-end gap-[12px] absolute top-[6px] left-[13px]">
              <BiSearch
                className="w-8 h-8"
                color="#9F9F9F"
              /> 
              <input placeholder="Поиск" className="relative w-fit mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-gray text-[16px] tracking-[0] leading-[27px] focus:outline-none"/>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-5">
          <button className="bg-gray-200 text-white px-3 py-3 hover:bg-gray-300 focus:outline-none rounded-full">
            <BiListUl color="black" className="w-8 h-8"/>
          </button>

          <button className="bg-gray-200 text-white px-3 py-3 hover:bg-gray-300 focus:outline-none rounded-full">
            <BiCartAlt color="black" className="w-8 h-8"/>
          </button>
        </div>
      </div>
    </div>
  );
};
