import { ArrowDown, ArrowUp } from "lucide-react";
import React from "react";

const data = {
  sperm_amount: 4321, // 1.4
  sperm_count: 214, // over 39 million
  sperm_movement: 66, // over 42%
  sperm_survive: 0.1308411214953271, // over 54%
  straight_motility: 0.06074766355140187, // more than 30%
};

const ProgressBar = ({
  title,
  amount = "0",
  who,
}: {
  title: string;
  amount: string;
  who: string;
}) => {
  return (
    <div className="w-full">
      <p className="text-lg lg:text-3xl font-bold mb-14 uppercase">{title}</p>
      <div className="bg-white rounded-lg shadow-sm p-1 w-full">
        <div className="relative h-6 flex items-center justify-center w-full">
          <div
            style={{ width: `${amount}%` }}
            className={`absolute top-0 bottom-0 left-0 rounded-md bg-[#2836E4] z-10`}
          >
            <span className="absolute -right-10 w-16 -top-14 z-50 overflow-visible text-white font-bold text-lg">
              Patient
              <ArrowDown className="w-4 h-4 ml-4" />
            </span>
          </div>
          <div
            style={{ width: `${who}%` }}
            className="absolute top-0 bottom-0 left-0 rounded-md bg-red-600"
          >
            <span className="absolute -right-[75px] w-[80px] -bottom-8 z-40 overflow-visible text-green-600 font-bold flex">
              <ArrowUp className="w-4 h-4 mr-1" />
              WHO
            </span>
          </div>
          <div className="relative text-black font-bold text-sm z-20">
            {amount}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
