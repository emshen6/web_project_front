import React from "react";
import logo from "../img/logo_white.svg";
import { FaInstagram } from "react-icons/fa";
import { BiEnvelope, BiPhone } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-blue-950 flex min-h-[264px] flex-col">
      <div className="flex justify-between gap-5 items-start max-md:flex-wrap mt-10 mr-10 ml-10">
        <img
          loading="lazy"
          src={logo}
          className="aspect-[3.22] object-contain object-center w-[177px] overflow-hidden shrink-0 max-w-full"
          alt={logo}
        />
        <div className="self-stretch max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
              <span className="items-stretch flex flex-col px-5 max-md:mt-10">
                <div className="text-white text-base text-left leading-6">Контакты</div>
                <div className="text-white text-base text-left leading-6 whitespace-nowrap mt-4">
                  Обратная связь
                </div>
                <div className="text-white text-base text-left leading-6 mt-4">
                  Прайс-лист
                </div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:mt-10">
                <span className="items-stretch flex justify-between gap-3 px-5">
                  <FaInstagram
                    color="white"
                  />
                  <div className="text-white text-base text-left leading-6 self-start">
                    zavodspetsmash
                  </div>
                </span>
                <span className="items-stretch flex justify-between gap-3 mt-4 px-5">
                  <BiEnvelope
                    color="white"
                  />
                  <div className="text-white text-base text-left leading-6 self-start">
                    azspm@mail.ru
                  </div>
                </span>
                <span className="items-stretch flex justify-between gap-3 mt-4 px-5">
                  <BiPhone
                    color="white"
                  />
                  <div className="text-white text-base text-left leading-6 grow whitespace-nowrap self-start">
                    (85592)9-90-29, 5-13-35
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
