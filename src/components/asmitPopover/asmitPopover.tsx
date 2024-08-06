import React from "react";
import { Button } from "../ui/button";

const Popover = ({ setIsClosed }: { setIsClosed: (prev: any) => void }) => {
  return (
    <div className="md:w-[700px] lg:w-[1000px] z-10 rounded-2xl md:h-[700px] bg-gray-500 absolute top-10 p-10 flex flex-col">
      <h5 className="text-3xl text-white font-semibold mb-10 text-center">
        Guidelines before analysis
      </h5>
      <div className="flex flex-col gap-2 px-10 text-white flex-grow">
        <p className="text-gray-300">
          To get a good result from ASMIT analysis tool, We ask you to read
          these guidelines carefully and follow each recommended guides
        </p>
        <p className="text-lg">1. Microscope</p>
        <p className="text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ex
          dolorem iste obcaecati ad? Aut, ut. Id asperiores veniam voluptatem.
        </p>
        <p className="text-lg">2. Video</p>
        <p className="text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ex
          dolorem iste obcaecati ad? Aut, ut. Id asperiores veniam voluptatem.
        </p>
      </div>
      <Button
        onClick={() => setIsClosed((prev: boolean) => !prev)}
        size={"lg"}
        className=" self-center"
      >
        Continue
      </Button>
    </div>
  );
};

export default Popover;
