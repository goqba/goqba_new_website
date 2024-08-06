import { formatDate } from "@/lib/utils";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const TimeSeriesChart = () => {
  const data1 = [
    {
      created_at: "2022-01-01T00:00:00.000Z",
      progressive: 24,
      non_progressive: 40,
      motile: 70,
      immotile: 50,
    },
    {
      created_at: "2022-01-02T00:00:00.000Z",
      progressive: 30,
      non_progressive: 35,
      motile: 65,
      immotile: 42,
    },
    {
      created_at: "2022-01-03T00:00:00.000Z",
      progressive: 30,
      non_progressive: 24,
      motile: 54,
      immotile: 36,
    },
    {
      created_at: "2022-01-04T00:00:00.000Z",
      progressive: 37,
      non_progressive: 20,
      motile: 57,
      immotile: 20,
    },
    {
      created_at: "2022-01-05T00:00:00.000Z",
      progressive: 48,
      non_progressive: 29,
      motile: 77,
      immotile: 10,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data1}
        margin={{ top: 20, right: 30, left: 5, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="created_at"
          tickFormatter={formatDate}
          allowDataOverflow
        />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="progressive" stroke="#82ca9d" />
        <Line type="monotone" dataKey="non_progressive" stroke="#ffc658" />
        <Line type="monotone" dataKey="motile" stroke="#ff7300" />
        <Line
          type="monotone"
          dataKey="immotile"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const TimeSeriesClassChart = () => {
  const data2 = [
    {
      created_at: "2022-01-01T00:00:00.000Z",
      a_class_count: 8,
      b_class_count: 9,
      c_class_count: 3,
      d_class_count: 10,
    },
    {
      created_at: "2022-01-02T00:00:00.000Z",
      a_class_count: 7,
      b_class_count: 23,
      c_class_count: 6,
      d_class_count: 19,
    },
    {
      created_at: "2022-01-03T00:00:00.000Z",
      a_class_count: 8,
      b_class_count: 26,
      c_class_count: 16,
      d_class_count: 29,
    },
    {
      created_at: "2022-01-05T00:00:00.000Z",
      a_class_count: 14,
      b_class_count: 30,
      c_class_count: 20,
      d_class_count: 27,
    },
    {
      created_at: "2022-01-05T00:00:00.000Z",
      a_class_count: 10,
      b_class_count: 22,
      c_class_count: 20,
      d_class_count: 28,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data2}
        margin={{ top: 20, right: 30, left: 5, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="created_at" tickFormatter={formatDate} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="a_class_count"
          stroke="#8884f3"
          activeDot={{ r: 8 }}
          name="Class A"
        />
        <Line
          type="monotone"
          dataKey="b_class_count"
          stroke="#82ff9d"
          name="Class B"
        />
        <Line
          type="monotone"
          dataKey="c_class_count"
          stroke="#fff658"
          name="Class C"
        />
        <Line
          type="monotone"
          dataKey="d_class_count"
          stroke="#ff73ff"
          name="Class D"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
