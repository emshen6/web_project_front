import React from "react";
import Menu from "./Menu";


const Catalogue = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="p-4">
        <Menu />
      </div>

      <div className="col-span-2 p-4">
        <div className="text-black text-4xl font-medium text-left whitespace-nowrap self-start">
          Каталог
        </div>
        <div className="grid grid-cols-3 overflow-y-scroll">

        </div>
      </div>
    </div>
  );
};

export default Catalogue;
