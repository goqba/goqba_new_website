import heroBg from "../../../public/assets/images/none.svg";
import Image from "next/image";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Hero = () => {
  const t = useTranslations();

  return (
    <section
      id="home"
      className="flex w-full container min-h-[90vh] relative pt-10"
    >
      <div className="flex lg:flex-row mt-20 md:mt-0 md:items-center w-full justify-center lg:justify-between gap-2">
        <div className="flex flex-col items-start mb-20 w-full lg:w-1/2">
          <span
            data-aos="fade-up"
            data-aos-duration="500"
            className="text-[#09B0C0] font-semibold mb-5 border-b-2 pb-2 border-[#09B0C0]"
          >
            For New Future
          </span>
          <h1
            data-aos="fade-up"
            data-aos-duration="700"
            className="text-4xl md:text-6xl tracking-wide leading-tight font-bold"
          >
            AI-Powered Medical <br /> Solutions
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="900"
            className="text-sm md:text-base mt-8 md:max-w-[500px]"
          >
            Welcome to GoQba Technology - where the future of healthcare is here
            and now. Harnessing the power of AI, we offer groundbreaking
            solutions to help you overcome health challenges.
          </p>
          <Link
            data-aos="fade-up"
            data-aos-duration="1100"
            href="mailto:goqba@goqba.com"
            className="mt-5 hover:scale-x-110 transition-all duration-200"
          >
            <Button
              size={"lg"}
              className="flex items-center justify-center gap-3 bg-brand text-lg  transition-all duration-200"
            >
              {"Get in touch"}
              <span>&rarr;</span>
            </Button>
          </Link>
        </div>
        <div className="hidden lg:block md:-mr-16 w-1/2 mt-[70px] md:mt-0">
          <Image
            src={heroBg}
            alt="Hero background"
            className="w-full"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
