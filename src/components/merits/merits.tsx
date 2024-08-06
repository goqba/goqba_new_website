import React from "react";
import preventionImg from "../../../public/assets/images/medical.png";
import predictionImg from "../../../public/assets/images/predictive-chart.png";
import rehabilitationImg from "../../../public/assets/images/rehabilitation.png";
import Image from "next/image";

const meritsData = [
  {
    title: "Prediction",
    text: "Leveraging AI for early detection, GoQba Technology's predictive tools identify potential health risks, enabling proactive care and early intervention for neurological conditions. Our advanced algorithms pave the way for a healthier future by foreseeing and managing health challenges before they escalate",
    logo: predictionImg,
  },
  {
    title: "Prevention",
    text: "Our prevention technologies are designed to safeguard against neurological decline, integrating seamlessly into daily life. Through tailored programs and innovative devices, we aim to reduce the incidence of cognitive impairments, ensuring a better quality of life for those at risk",
    logo: preventionImg,
  },
  {
    title: "Rehabilitation",
    text: " GoQba Technology's personalized rehabilitation solutions support recovery and independence. Utilizing the latest in XR technology and cognitive training, our programs are customized to each individual's needs, fostering progress and enhancing cognitive and physical capabilities",
    logo: rehabilitationImg,
  },
];

const Merits = () => {
  return (
    <div className="container md:mx-auto flex w-full justify-center items-center relative -translate-y-32">
      <div className="flex flex-wrap flex-col md:flex-row lg:flex-nowrap gap-10 md:px-10">
        {meritsData.map((item, index) => (
          <MeritsCard
            key={item.title}
            title={item.title}
            text={item.text}
            icon={item.logo}
          />
        ))}
      </div>
    </div>
  );
};

export default Merits;

export const MeritsCard = ({ title, text, icon }: any) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className={`flex flex-col gap-3 md:w-[400px] lg:w-1/2 xl:w-1/3 mx-auto bg-white drop-shadow-md text-black p-7 rounded-lg hover:scale-105 transition-all duration-200`}
    >
      <Image src={icon} height={70} width={70} alt={title} />
      <p className="text-3xl font-semibold mt-2">{title}</p>
      <span className="h-1 w-12 bg-brand"></span>
      <p className="text-[14px] text-gray-500 text-justify">{text}</p>
    </div>
  );
};
