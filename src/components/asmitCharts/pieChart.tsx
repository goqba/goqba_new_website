"use client";
import { useState } from "react";
import { ResponsivePie } from "@nivo/pie";

const PieChartComponent = () => {
  return (
    <div className="text-center h-[400px] w-[400px] text-black">
      <span className="font-bold text-center">
        연령대 염색체 이상 가능성 비율
      </span>
      <ResponsivePie
        data={data}
        margin={{ top: 20, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default PieChartComponent;

export const data = [
  {
    id: "높음",
    label: "높음",
    value: "42",
    color: "hsl(0, 88.29268292682926%, 59.80392156862745%)",
  },
  {
    id: "낮음",
    label: "낮음",
    value: "58",
    color: "hsl(130, 92.30769230769232%, 64.31372549019608%)",
  },
];
export const data2 = [
  {
    id: "높음",
    label: "높음",
    value: "43",
    color: "hsl(182, 70%, 50%)",
  },
  {
    id: "낮음",
    label: "낮음",
    value: "57",
    color: "hsl(130, 70%, 50%)",
  },
];
