"use client";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const data1 = [
  {
    name: "Sperm count based on Class",
    a_class: 28,
    b_class: 19,
    c_class: 13,
    d_class: 27,
  },
];

export class ClassChart extends PureComponent {
  render() {
    return (
      <div className="w-full h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data1}
            barGap={30}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              cursor={false}
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #dcdcdc",
                borderRadius: "5px",
                padding: "10px",
                width: "fit-content",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Legend height={36} iconType="line" />
            <Bar
              dataKey="a_class"
              name={"Type A"}
              fill="#06C"
              barSize={100}
              radius={[10, 10, 0, 0]}
            >
              <LabelList dataKey="a_class" position="top" />
            </Bar>
            <Bar
              dataKey="b_class"
              name={"Type B"}
              fill="#4CB140"
              barSize={100}
              radius={[10, 10, 0, 0]}
            >
              <LabelList dataKey="b_class" position="top" />
            </Bar>
            <Bar
              dataKey="c_class"
              name={"Type C"}
              fill="#009596"
              barSize={100}
              radius={[10, 10, 0, 0]}
            >
              <LabelList dataKey="c_class" position="top" />
            </Bar>
            <Bar
              dataKey="d_class"
              name={"Type D"}
              fill="#5752D1"
              barSize={100}
              radius={[10, 10, 0, 0]}
            >
              <LabelList dataKey="d_class" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
