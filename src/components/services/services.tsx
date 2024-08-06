import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import seez from "../../../public/assets/images/seez.webp";
import brainq from "../../../public/assets/images/brainq.webp";
import dzq from "../../../public/assets/images/dsq.webp";
import hodu from "../../../public/assets/images/hodu.webp";
import asmit from "../../../public/assets/images/asmit-cover.png";
import Link from "next/link";

const projectsData = [
  {
    title: "ASMIT",
    text: "Our groundbreaking technique for diagnosing specific abnormal sperms, contributing to fertility solutions for cases of unknown causes.",
    imgSrc: asmit,
    link: "/asmit",
  },
  {
    title: "Seez",
    text: "Revolutionizing stroke rehabilitation with our DTx program, leveraging XR technology for engaging 3D object interaction.",
    imgSrc: seez,
    link: "/seez",
  },
  {
    title: "Beery VMI",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt mollitia odio laboriosam debitis rerum reprehenderit.",
    imgSrc: hodu,
    link: "/soon",
  },
  {
    title: "BrainQ",
    text: "Early dementia prediction AI service that provides customized rehabilitation curation for dementia delay.",
    imgSrc: brainq,
    link: "/soon",
  },
  {
    title: "Hodu",
    text: "Enhancing cognitive rehabilitation through personalized content and monitoring, tailored to mild cognitive impairments",
    imgSrc: hodu,
    link: "/soon",
  },
  {
    title: "DZQ",
    text: "Dizziness Prevention Rehabilitation (DTx) Program for Repeated Exercise of the Vibrant System.",
    imgSrc: dzq,
    link: "/soon",
  },
];

const Services = () => {
  return (
    <div
      id="solutions"
      className="container mx-auto min-h-screen py-20 lg:py-28 flex flex-col justify-center items-center"
    >
      <span
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-[#09B0C0] font-semibold mb-5"
      >
        Leading Medical solutions
      </span>
      <h2
        data-aos="fade-up"
        data-aos-duration="1500"
        className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-center"
      >
        Available Solutions
      </h2>
      <p
        data-aos="fade-up"
        data-aos-duration="1600"
        className="mb-24 text-sm md:text-base text-gray-500 max-w-[700px] text-center"
      >
        We predict and analyze health through digital-based AI healthcare
        services. Protect your health through customized rehabilitation training
        programs.
      </p>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {projectsData.map((item, index) => (
          <ServiceCards
            key={index}
            title={item.title}
            text={item.text}
            logo={item.imgSrc}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;

export const ServiceCards = ({ title, text, logo, link }: any) => {
  return (
    <div className="w-full lg:max-w-[350px] lg:h-[460px] rounded-lg overflow-hidden drop-shadow-xl hover:scale-105 transition-all duration-200 bg-white flex flex-col p-2 pb-6">
      <Image
        width={350}
        height={200}
        style={{ width: "100%", height: "170px" }}
        priority={true}
        className="w-full h-auto aspect-auto rounded-lg"
        src={logo}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-black text-2xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{text}</p>
      </div>
      {link === "/soon" ? (
        <Button
          disabled
          className="mx-6 text-center py-6 text-base bg-gray-500 hover:bg-gray-600"
        >
          Coming soon
        </Button>
      ) : (
        <Link href={link} className="mx-6">
          <Button className="w-full py-6 text-base bg-brand hover:bg-brand/90">
            Learn more
          </Button>
        </Link>
      )}
    </div>
  );
};
