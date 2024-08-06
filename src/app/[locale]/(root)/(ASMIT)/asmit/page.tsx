"use client";
import AsmitHero from "../../../../../../public/assets/images/asmit/fertilify.svg";
import SeezP1 from "../../../../../../public/assets/images/seezP1.svg";
import SeezP2 from "../../../../../../public/assets/images/seezP2.svg";
import SeezP3 from "../../../../../../public/assets/images/seezP3.svg";
import Accuracy from "../../../../../../public/assets/images/asmit/arrow.png";
import Fast from "../../../../../../public/assets/images/asmit/fast.jpg";
import Money from "../../../../../../public/assets/images/asmit//money.jpg";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-[#000D27]">
      {/* Hero */}
      <section className="container pt-40 pb-32 flex justify-center items-center">
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold mb-2">
            We provide ...
          </h1>
          <TypeAnimation
            sequence={[
              "ASMIT",
              500,
              "Abnormal",
              500,
              "Sperm",
              500,
              "Movement",
              500,
              "Intelligent",
              500,
              "Tracking",
              500,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: "3rem",
              display: "inline-block",
              fontWeight: 700,
              color: "#01FFFA",
            }}
          />
          <p className="max-w-[400px] font-semibold mt-3">
            Screening and deagnostic techniques for specific abnormal sperm for
            infertility of unknown causes contributes to fertility through
            development.
          </p>
          <Link className="mt-10 block" href={"/asmit/report"}>
            <button
              type="button"
              className="py-[14px] pl-1 pr-6 rounded-3xl border-none bg-gradient-to-r from-[#FF6566] via-[#AB4AA6] to-[#3625FF]"
            >
              <span className="rounded-3xl bg-black py-[12px] px-6 mr-2 font-bold text-base">
                Learn more
              </span>{" "}
              &#10095;&#10095;
            </button>
          </Link>
        </div>
        <div className="hidden lg:block lg:w-1/2">
          <div className="p-[2px] rounded-md">
            <Image
              className="w-full h-auto rounded-3xl"
              src={AsmitHero}
              width={500}
              height={300}
              alt="Sperm image"
              priority
            />
          </div>
        </div>
      </section>
      {/* Stats */}
      <section className="container flex flex-col items-center py-40">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-10 md:mb-24 xl:mb-28">
          Why choose us?
        </h2>
        <div className="flex flex-col md:flex-row gap-5 text-black">
          <div className=" bg-white rounded-md p-8 space-y-4 w-full lg:w-1/3 h-[350px]">
            <div className="w-[150px]">
              <Image
                src={Accuracy}
                alt={"accuracy"}
                className="w-full h-auto"
              />
            </div>
            <h4 className="text-3xl font-bold drop-shadow-2xl text-black">
              High Accuracy
            </h4>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              delectus ex nisi qui fuga dolore corrupti rem excepturi sunt
              ipsum.
            </p>
          </div>
          <div className=" bg-white rounded-md p-8 space-y-4 w-full lg:w-1/3 h-[350px] lg:mt-10">
            <div className="w-[150px]">
              <Image src={Fast} alt={"accuracy"} className="w-full h-auto" />
            </div>
            <h4 className="text-3xl font-bold drop-shadow-2xl text-black">
              Fast Service
            </h4>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              delectus ex nisi qui fuga dolore corrupti rem excepturi sunt
              ipsum.
            </p>
          </div>
          <div className=" bg-white rounded-md p-8 space-y-4 w-full lg:w-1/3 h-[350px]">
            <div className="w-[150px]">
              <Image src={Money} alt={"accuracy"} className="w-full h-auto" />
            </div>
            <h4 className="text-3xl font-bold drop-shadow-2xl text-black">
              Affordable Price
            </h4>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              delectus ex nisi qui fuga dolore corrupti rem excepturi sunt
              ipsum.
            </p>
          </div>
        </div>
      </section>
      {/* Cards */}
      <section className="container py-20 md:py-40">
        <h2 className="text-4xl text-center md:text-5xl lg:text-6xl font-semibold mb-10 md:mb-24 xl:mb-28">
          What can you get?
        </h2>
        <ul className="flex flex-col md:flex-row items-center justify-center gap-7">
          <li className="p-[2px] bg-gradient-to-r from-[#FF6566] via-[#AB4AA6] to-[#3625FF] md:w-[384px] h-[425px] rounded-lg mt-0 md:mt-20">
            <div className="flex flex-col items-center py-5 px-3 bg-[#262626]/80 rounded-lg w-full h-full">
              <Image width={55} height={55} alt="Seez icon" src={SeezP1} />
              <h6
                style={{ textShadow: "#FC0 1px 0 10px" }}
                className="text-xl font-semibold mt-8 mb-2 "
              >
                Machine Learning Algorithms
              </h6>
              <p className="flex-grow text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                consequatur tenetur molestias qui voluptatibus sint distinctio
                laboriosam corrupti fuga nobis.
              </p>
              <Link
                href={"/asmit/report"}
                className="text-lg font-semibold bg-gradient-to-r from-[#FF6566] via-[#AB4AA6] to-[#3625FF] inline-block text-transparent bg-clip-text"
              >
                Learn more &#10095;&#10095;
              </Link>
            </div>
          </li>

          <li className="p-[2px] bg-gradient-to-r from-[#FF6566] via-[#AB4AA6] to-[#3625FF] md:w-[384px] h-[425px] rounded-lg">
            <div className="flex flex-col items-center py-5 px-3 bg-[#262626]/80 rounded-lg w-full h-full">
              <Image width={55} height={55} alt="Seez icon" src={SeezP2} />
              <h6
                style={{ textShadow: "#FC0 1px 0 10px" }}
                className="text-xl font-semibold mt-8 mb-2 "
              >
                Analysis in Charts and Graphs
              </h6>
              <p className="flex-grow text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                consequatur tenetur molestias qui voluptatibus sint distinctio
                laboriosam corrupti fuga nobis. sit amet consectetur adipisicing
                elit
              </p>
              <Link
                href={"/asmit/report"}
                className="text-lg font-semibold bg-gradient-to-r from-[#FF6566] via-[#AB4AA6] to-[#3625FF] inline-block text-transparent bg-clip-text"
              >
                Learn more &#10095;&#10095;
              </Link>
            </div>
          </li>

          <li className="p-[2px] bg-gradient-to-r from-[#FF6566] via-[#AB4AA6] to-[#3625FF] md:w-[384px] h-[425px] rounded-lg mt-0 md:mt-20">
            <div className="flex flex-col items-center py-5 px-3 bg-[#262626]/80 rounded-lg w-full h-full">
              <Image width={55} height={55} alt="Seez icon" src={SeezP3} />
              <h6
                style={{ textShadow: "#FC0 1px 0 10px" }}
                className="text-xl font-semibold mt-8 mb-2 "
              >
                Machine Learning Algorithms
              </h6>
              <p className="flex-grow text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                consequatur tenetur molestias qui voluptatibus sint distinctio
                laboriosam corrupti fuga nobis.
              </p>
              <Link
                href={"/asmit/report"}
                className="text-lg font-semibold bg-gradient-to-r from-[#FF6566] via-[#AB4AA6] to-[#3625FF] inline-block text-transparent bg-clip-text"
              >
                Learn more &#10095;&#10095;
              </Link>
            </div>
          </li>
        </ul>
      </section>

      {/* How ASMIT Works */}
    </div>
  );
};

export default Page;

// Abnormal Sperm Movement Intelligent Tracking
