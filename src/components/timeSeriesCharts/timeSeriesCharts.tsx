import { cn } from "@/lib/utils";
import {
  TimeSeriesChart,
  TimeSeriesClassChart,
} from "../asmitCharts/timeSeriesChart";

const TimeSeriesCharts = () => {
  return (
    <div className="w-full h-full">
      <h3 className="font-bold text-3xl md:text-5xl text-center mb-4">
        Time series data
      </h3>
      <p className="text-center max-w-[550px] mx-auto mb-10">
        The charts below shows the time series comparision of sperm motility and
        sperm class categories.
      </p>
      <div
        className={cn(
          "flex items-center flex-col justify-between gap-5 w-full h-full",
        )}
      >
        <div className="w-full h-full">
          <div className="flex items-center flex-col gap-5">
            <p className="text-xl text-center">
              Time series comparision of sperm motility
            </p>
          </div>
          <TimeSeriesChart />
        </div>
        <div className="w-full h-full">
          <div className="flex items-center flex-col gap-5">
            <p className="text-xl text-center">
              Time series comparision of sperm class categories
            </p>
          </div>
          <TimeSeriesClassChart />
        </div>
      </div>
    </div>
  );
};

export default TimeSeriesCharts;
