"use client";
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";
import { Button } from "../ui/button";
import { RotateCw, ZoomIn, ZoomOut } from "lucide-react";
import Image from "next/image";

const ResultImage = () => {
  const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();
    return (
      <div className="flex items-center justify-between py-4 gap-2 w-full">
        <Button
          size={"lg"}
          className="text-white font-semibold"
          onClick={() => zoomIn()}
        >
          <ZoomIn className="h-5 w-5 mr-1" /> Zoom In
        </Button>
        <Button
          size={"lg"}
          className="text-white font-semibold"
          onClick={() => resetTransform()}
        >
          <RotateCw className="h-5 w-5 mr-1" /> Reset
        </Button>
        <Button
          size={"lg"}
          className="text-white font-semibold"
          onClick={() => zoomOut()}
        >
          <ZoomOut className="h-5 w-5 mr-1" /> Zoom Out
        </Button>
      </div>
    );
  };
  return (
    <div className="h-auto rounded-md overflow-hidden">
      <TransformWrapper>
        <TransformComponent>
          <img
            className="rounded-md h-full w-full"
            src="/assets/asmitResult.jpeg"
            alt="sperm analysis result image"
          />
        </TransformComponent>
        <Controls />
      </TransformWrapper>
    </div>
  );
};

export default ResultImage;
