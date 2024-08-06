"use client";
import { ClassChart } from "@/components/asmitCharts/spermCharts";
import ClassImage from "@/components/classImage/classImage";
import DownloadPdf from "@/components/downloadPdf/downloadPdf";
import ResultCard from "@/components/resultCard/resultCard";
import ResultCard2 from "@/components/resultCard/resultCard2";
import TimeSeriesCharts from "@/components/timeSeriesCharts/timeSeriesCharts";

const Results = () => {
  return (
    <div className="container overflow-hidden mx-auto text-white pt-10">
      <div className=" relative space-y-20">
        <h1 className="text-3xl lg:text-5xl font-bold text-white text-center mt-10">
          ASMIT sperm analysis report
        </h1>
        {/*  */}
        <div className="space-y-5 bg-gray-800 p-8 rounded-lg">
          <h4 className="font-bold text-3xl lg:text-5xl text-center mb-10">
            Patient Detail
          </h4>
          <div className="flex flex-col lg:flex-row justify-between gap-5">
            <div className="space-y-4">
              <p className="text-lg lg:text-3xl font-semibold capitalize grid grid-cols-3">
                <span className=" col-span-2">Patient ID </span>
                <span className="text-lg font-semibold capitalize text-brand">
                  {"M5GR84I9" || 0}
                </span>
              </p>
              <p className="text-lg lg:text-3xl font-semibold capitalize grid grid-cols-3">
                <span className=" col-span-2">Date </span>
                <span className="text-lg font-semibold capitalize text-brand">
                  {"2024.03.25 09:30"}
                </span>
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-lg lg:text-3xl font-semibold capitalize grid grid-cols-3 items-center">
                <span className=" col-span-2 min-w-[200px]">
                  {"Patient Age"}{" "}
                </span>
                <span className="text-lg font-semibold uppercase text-brand">
                  {"42"}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="">
          <h3 className="font-bold text-3xl md:text-5xl text-center mb-4">
            AI Tracking
          </h3>
          <p className="text-center max-w-[550px] mx-auto mb-10">
            The video below shows the AI tracking result of patient's sperm, and
            the charts shows the number of sperms based on 4 different
            categories.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-[500px]">
            <div className="w-full">
              <div className="p-2 bg-gradient-to-r from-[#E11EFC] to-[#2836E4] rounded-md drop-shadow-2xl">
                <video
                  width="1000"
                  height="500"
                  controls
                  muted
                  className="rounded-md"
                >
                  <source src={"/assets/asmitOutput.mp4"} type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="h-full">
              <ClassChart />
            </div>
          </div>
        </div>

        {/*  */}
        <div className="space-y-12 rounded-lg">
          <h4 className="font-bold text-3xl md:text-5xl text-center">
            Result Overview
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            <ResultCard
              title="Progressive"
              value="13"
              who={"32"}
              text={"of the sperms are moving"}
              count="%"
              countNumber="28"
            />
            <ResultCard
              title="Non-Progressive"
              value="15"
              who={"30"}
              text={"of the sperms are moving strightly"}
              count="%"
              countNumber="32"
            />
            <ResultCard
              title="Motile"
              value="41"
              who={"54"}
              text={"of the sperms are survived"}
              count="%"
              countNumber="87"
            />
            <ResultCard
              title="Immotile"
              value="59"
              who={"50"}
              text={"of the sperms are not survived"}
              count="%"
              countNumber="117"
              reverse={true}
            />
            <ResultCard2
              title="Sperm count"
              value="214"
              who={"100"}
              text={"sperm counted"}
              count=""
              max="250"
            />
            <ResultCard2
              title="Volume"
              value={"1.8"}
              who={"1.4"}
              text={"of semen"}
              count="mL"
              max="2.8"
            />
          </div>
        </div>

        {/*  */}
        <div className="grid gap-10 lg:gap-0 md:grid-cols-2">
          <div className="flex flex-col gap-7 md:gap-10">
            <h4 className="font-bold text-3xl md:text-5xl text-center">
              We Recommend
            </h4>
            <div className="bg-transparent border-4 w-40 h-40 rounded-full mx-auto flex flex-col gap-2 justify-center items-center border-red-400 relative">
              {/* Initial point */}
              <p className="font-semibold text-xl">ICSI</p>

              <div className="h-10 w-10">
                <svg
                  className="scroll-animation"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 125"
                  enableBackground="new 0 0 100 100"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      fill="white"
                      d="M72.967,11.485c6.988-6.989,19.38-12.142,23.844-7.677c4.464,4.464-0.688,16.855-7.677,23.843   c-3.824,3.824-7.697,5.53-11.151,5.558c-4.604,0.156-8.78,1.772-11.566,4.574c-4.485,4.121-9.096,4.438-12.021,4.769   c-21.474,2.427,9.62,28.718-31.662,33.804C9.233,78.018,3.803,92.387,2.92,95.135c-0.004,0.018-0.01,0.035-0.018,0.053   c-0.018,0.043-0.043,0.086-0.08,0.121c-0.137,0.137-0.355,0.143-0.485,0.014C2.247,95.23,2.222,95.1,2.26,94.98   c0.279-1.105,4.841-18.289,18.812-20.756c40.926-7.219,1.404-31.967,34.959-36.639c6.849-0.953,11.03-7.227,11.38-14.67   C67.348,19.391,69.038,15.413,72.967,11.485L72.967,11.485z"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-7  md:space-y-10">
            <h4 className="font-bold text-3xl md:text-5xl text-center">
              Conclusion
            </h4>
            <p className="text-center max-w-[550px]">
              Based on our comprehensive analysis of your sperm analysis video
              using our advanced AI model, we have identified a significant lack
              of progressive sperm and a high number of immotile sperm. Given
              these findings, we recommend proceeding with the ICSI
              (Intracytoplasmic Sperm Injection) test as the next step.
            </p>
          </div>
        </div>

        {/*  */}
        <TimeSeriesCharts />

        <DownloadPdf />
      </div>
    </div>
  );
};

export default Results;
