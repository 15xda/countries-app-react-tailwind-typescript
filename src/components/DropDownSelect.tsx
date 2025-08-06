import { useState } from "react";
import React from "react";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

type DropDownSelectProps = {
  activeRegion: string;
  setActiveRegion: React.Dispatch<React.SetStateAction<string>>;
};

export default function DropDownSelect({
  activeRegion,
  setActiveRegion,
}: DropDownSelectProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-col items-center text-white relative">
      <button
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={`w-full cursor-pointer bg-[#1F1F1F] select-none px-7 py-4 hover:outline hover:outline-white`}
      >
        Region: {activeRegion}
      </button>
      <div
        className={`${
          !isActive && "hidden"
        } flex flex-col absolute mt-17 bg-[#1F1F1F] w-full z-100 gap-2 py-4 outline outline-white`}
      >
        {["None", ...regions].map((region) => (
          <button
            onClick={() => {
              setIsActive(false);
              setActiveRegion(region);
            }}
            className={`hover:font-bold ${
              region === activeRegion && "font-bold"
            }`}
          >
            {region}
          </button>
        ))}
      </div>
    </div>
  );
}
